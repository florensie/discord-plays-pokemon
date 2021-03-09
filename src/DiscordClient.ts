import Discord, {
  MessageAttachment,
  MessageEmbed,
  TextChannel,
} from 'discord.js';
import glob from 'glob'; // included by discord.js
import { promisify } from 'util';
import { DiscordChannelId, Prefix } from './Config';
import { Log } from './Log';
import { Command } from './types/Command';

const globPromise = promisify(glob);

class DiscordClient {
  getChannel() {
    throw new Error('Method not implemented.');
  }
  private _token: string;
  private _client: Discord.Client;
  private _channel: Discord.TextChannel;
  private _commands: Command[];
  public sendingMessage: boolean;
  public failedAttempts: number;

  get commands() {
    return this._commands;
  }

  constructor(token: string) {
    this._token = token;
    this._client = new Discord.Client();
    this._channel = this._client.channels.cache.get(
      DiscordChannelId
    ) as TextChannel;
    this._commands = [];
    this.sendingMessage = false;
    this.failedAttempts = 0;
  }

  start() {
    this._client.on('ready', async () => {
      Log.info(`Logged in!`);
      this._channel = this._client.channels.cache.get(
        DiscordChannelId
      ) as TextChannel;
      if (this._client.user) {
        this._client.user
          .setActivity(`${Prefix}help`, { type: 'LISTENING' })
          .then((presence) =>
            Log.info(`Activity set to ${presence.activities[0].name}`)
          )
          .catch(Log.error);
      }
      const commandFiles = await globPromise(`${__dirname}/commands/*.{js,ts}`);

      for (const file of commandFiles) {
        const command = require(file) as Command;
        Log.info('Added command', command.name);
        this._commands.push(command);
      }
    });

    this._client.on('message', async (message) => {
      if (
        message.author.bot ||
        message.channel.id !== DiscordChannelId ||
        !message.content.startsWith(Prefix)
      ) {
        return;
      }

      const [commandName, ...args] = message.content
        .slice(Prefix.length)
        .split(/ +/);

      const command = this._commands.find((c) => c.name === commandName);

      if (command) {
        command.execute(message, args);
      } else {
        this.sendMessage(
          `Unrecognized command. Type \`${Prefix}help\` for the list of commands.`
        );
      }
    });
    this._client.login(this._token);
  }

  async sendMessage(
    text: string | MessageEmbed,
    attachment?: MessageAttachment
  ) {
    if (attachment) {
      return this._channel.send(text, attachment);
    } else {
      return this._channel.send(text);
    }
  }
}

let instance: DiscordClient | null = null;

export function initDiscord(token: string) {
  instance = new DiscordClient(token);
}

export function getDiscordInstance(): DiscordClient | null {
  return instance;
}
