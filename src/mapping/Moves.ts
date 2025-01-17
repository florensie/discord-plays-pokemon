// NOTE: power and accuracy are in large parts incorrectly parsed
// It's possible some URLs are invalid

import { Move } from '../types/Move';

// Source: https://bulbapedia.bulbagarden.net/wiki/List_of_moves
export const Moves: Move[] = [
  {
    id: 1,
    name: 'Pound',
    type: 'Normal',
    category: 'Physical',
    maxPp: 35,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Pound_(move)',
  },
  {
    id: 2,
    name: 'Karate Chop',
    type: 'Normal',
    category: 'Physical',
    maxPp: 25,
    power: 50,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Karate_Chop_(move)',
  },
  {
    id: 3,
    name: 'Double Slap',
    type: 'Normal',
    category: 'Physical',
    maxPp: 10,
    power: 15,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Double Slap_(move)',
  },
  {
    id: 4,
    name: 'Comet Punch',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 18,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Comet Punch_(move)',
  },
  {
    id: 5,
    name: 'Mega Punch',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 80,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Mega Punch_(move)',
  },
  {
    id: 6,
    name: 'Pay Day',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Pay Day_(move)',
  },
  {
    id: 7,
    name: 'Fire Punch',
    type: 'Fire',
    category: 'Physical',
    maxPp: 15,
    power: 75,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Fire Punch_(move)',
  },
  {
    id: 8,
    name: 'Ice Punch',
    type: 'Ice',
    category: 'Physical',
    maxPp: 15,
    power: 75,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Ice Punch_(move)',
  },
  {
    id: 9,
    name: 'Thunder Punch',
    type: 'Electric',
    category: 'Physical',
    maxPp: 15,
    power: 75,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Thunder Punch_(move)',
  },
  {
    id: 10,
    name: 'Scratch',
    type: 'Normal',
    category: 'Physical',
    maxPp: 35,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Scratch_(move)',
  },
  {
    id: 11,
    name: 'Vise Grip',
    type: 'Normal',
    category: 'Physical',
    maxPp: 30,
    power: 55,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Vise Grip_(move)',
  },
  {
    id: 12,
    name: 'Guillotine',
    type: 'Normal',
    category: 'Physical',
    maxPp: 5,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Guillotine_(move)',
  },
  {
    id: 13,
    name: 'Razor Wind',
    type: 'Normal',
    category: 'Special',
    maxPp: 10,
    power: 80,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Razor Wind_(move)',
  },
  {
    id: 14,
    name: 'Swords Dance',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Swords Dance_(move)',
  },
  {
    id: 15,
    name: 'Cut',
    type: 'Normal',
    category: 'Physical',
    maxPp: 30,
    power: 50,
    accuracy: 95,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Cut_(move)',
  },
  {
    id: 16,
    name: 'Gust}',
    type: 'Normal',
    category: 'Special',
    maxPp: 35,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Gust_(move)',
  },
  {
    id: 17,
    name: 'Wing Attack',
    type: 'Flying',
    category: 'Physical',
    maxPp: 35,
    power: 60,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Wing Attack_(move)',
  },
  {
    id: 18,
    name: 'Whirlwind',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Whirlwind_(move)',
  },
  {
    id: 19,
    name: 'Fly',
    type: 'Flying',
    category: 'Physical',
    maxPp: 15,
    power: 90,
    accuracy: 95,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Fly_(move)',
  },
  {
    id: 20,
    name: 'Bind',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 15,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Bind_(move)',
  },
  {
    id: 21,
    name: 'Slam',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 80,
    accuracy: 75,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Slam_(move)',
  },
  {
    id: 22,
    name: 'Vine Whip',
    type: 'Grass',
    category: 'Physical',
    maxPp: 25,
    power: 45,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Vine Whip_(move)',
  },
  {
    id: 23,
    name: 'Stomp',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 65,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Stomp_(move)',
  },
  {
    id: 24,
    name: 'Double Kick',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 30,
    power: 30,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Double Kick_(move)',
  },
  {
    id: 25,
    name: 'Mega Kick',
    type: 'Normal',
    category: 'Physical',
    maxPp: 5,
    power: 120,
    accuracy: 75,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Mega Kick_(move)',
  },
  {
    id: 26,
    name: 'Jump Kick',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 10,
    power: 100,
    accuracy: 95,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Jump Kick_(move)',
  },
  {
    id: 27,
    name: 'Rolling Kick',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 15,
    power: 60,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Rolling Kick_(move)',
  },
  {
    id: 28,
    name: 'Sand Attack}',
    type: 'Normal',
    category: 'Status',
    maxPp: 15,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Sand Attack_(move)',
  },
  {
    id: 29,
    name: 'Headbutt',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 70,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Headbutt_(move)',
  },
  {
    id: 30,
    name: 'Horn Attack',
    type: 'Normal',
    category: 'Physical',
    maxPp: 25,
    power: 65,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Horn Attack_(move)',
  },
  {
    id: 31,
    name: 'Fury Attack',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 15,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Fury Attack_(move)',
  },
  {
    id: 32,
    name: 'Horn Drill',
    type: 'Normal',
    category: 'Physical',
    maxPp: 5,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Horn Drill_(move)',
  },
  {
    id: 33,
    name: 'Tackle',
    type: 'Normal',
    category: 'Physical',
    maxPp: 35,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Tackle_(move)',
  },
  {
    id: 34,
    name: 'Body Slam',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 85,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Body Slam_(move)',
  },
  {
    id: 35,
    name: 'Wrap',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 15,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Wrap_(move)',
  },
  {
    id: 36,
    name: 'Take Down',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 90,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Take Down_(move)',
  },
  {
    id: 37,
    name: 'Thrash',
    type: 'Normal',
    category: 'Physical',
    maxPp: 10,
    power: 120,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Thrash_(move)',
  },
  {
    id: 38,
    name: 'Double-Edge',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 120,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Double-Edge_(move)',
  },
  {
    id: 39,
    name: 'Tail Whip',
    type: 'Normal',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Tail Whip_(move)',
  },
  {
    id: 40,
    name: 'Poison Sting',
    type: 'Poison',
    category: 'Physical',
    maxPp: 35,
    power: 15,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Poison Sting_(move)',
  },
  {
    id: 41,
    name: 'Twineedle',
    type: 'Bug',
    category: 'Physical',
    maxPp: 20,
    power: 25,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Twineedle_(move)',
  },
  {
    id: 42,
    name: 'Pin Missile',
    type: 'Bug',
    category: 'Physical',
    maxPp: 20,
    power: 25,
    accuracy: 95,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Pin Missile_(move)',
  },
  {
    id: 43,
    name: 'Leer',
    type: 'Normal',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Leer_(move)',
  },
  {
    id: 44,
    name: 'Bite',
    type: 'Normal',
    category: 'Physical',
    maxPp: 25,
    power: 60,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Bite_(move)',
  },
  {
    id: 45,
    name: 'Growl',
    type: 'Normal',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Growl_(move)',
  },
  {
    id: 46,
    name: 'Roar',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Roar_(move)',
  },
  {
    id: 47,
    name: 'Sing',
    type: 'Normal',
    category: 'Status',
    maxPp: 15,
    power: NaN,
    accuracy: 55,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Sing_(move)',
  },
  {
    id: 48,
    name: 'Supersonic',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: 55,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Supersonic_(move)',
  },
  {
    id: 49,
    name: 'Sonic Boom',
    type: 'Normal',
    category: 'Special',
    maxPp: 20,
    power: NaN,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Sonic Boom_(move)',
  },
  {
    id: 50,
    name: 'Disable',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Disable_(move)',
  },
  {
    id: 51,
    name: 'Acid',
    type: 'Poison',
    category: 'Special',
    maxPp: 30,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Acid_(move)',
  },
  {
    id: 52,
    name: 'Ember',
    type: 'Fire',
    category: 'Special',
    maxPp: 25,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Ember_(move)',
  },
  {
    id: 53,
    name: 'Flamethrower',
    type: 'Fire',
    category: 'Special',
    maxPp: 15,
    power: 90,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Flamethrower_(move)',
  },
  {
    id: 54,
    name: 'Mist',
    type: 'Ice',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Mist_(move)',
  },
  {
    id: 55,
    name: 'Water Gun',
    type: 'Water',
    category: 'Special',
    maxPp: 25,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Water Gun_(move)',
  },
  {
    id: 56,
    name: 'Hydro Pump',
    type: 'Water',
    category: 'Special',
    maxPp: 5,
    power: 110,
    accuracy: 80,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Hydro Pump_(move)',
  },
  {
    id: 57,
    name: 'Surf',
    type: 'Water',
    category: 'Special',
    maxPp: 15,
    power: 90,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Surf_(move)',
  },
  {
    id: 58,
    name: 'Ice Beam',
    type: 'Ice',
    category: 'Special',
    maxPp: 10,
    power: 90,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Ice Beam_(move)',
  },
  {
    id: 59,
    name: 'Blizzard',
    type: 'Ice',
    category: 'Special',
    maxPp: 5,
    power: 110,
    accuracy: 70,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Blizzard_(move)',
  },
  {
    id: 60,
    name: 'Psybeam',
    type: 'Psychic',
    category: 'Special',
    maxPp: 20,
    power: 65,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Psybeam_(move)',
  },
  {
    id: 61,
    name: 'Bubble Beam',
    type: 'Water',
    category: 'Special',
    maxPp: 20,
    power: 65,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Bubble Beam_(move)',
  },
  {
    id: 62,
    name: 'Aurora Beam',
    type: 'Ice',
    category: 'Special',
    maxPp: 20,
    power: 65,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Aurora Beam_(move)',
  },
  {
    id: 63,
    name: 'Hyper Beam',
    type: 'Normal',
    category: 'Special',
    maxPp: 5,
    power: 150,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Hyper Beam_(move)',
  },
  {
    id: 64,
    name: 'Peck',
    type: 'Flying',
    category: 'Physical',
    maxPp: 35,
    power: 35,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Peck_(move)',
  },
  {
    id: 65,
    name: 'Drill Peck',
    type: 'Flying',
    category: 'Physical',
    maxPp: 20,
    power: 80,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Drill Peck_(move)',
  },
  {
    id: 66,
    name: 'Submission',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 20,
    power: 80,
    accuracy: 80,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Submission_(move)',
  },
  {
    id: 67,
    name: 'Low Kick',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 20,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Low Kick_(move)',
  },
  {
    id: 68,
    name: 'Counter',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 20,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Counter_(move)',
  },
  {
    id: 69,
    name: 'Seismic Toss',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 20,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Seismic Toss_(move)',
  },
  {
    id: 70,
    name: 'Strength',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 80,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Strength_(move)',
  },
  {
    id: 71,
    name: 'Absorb',
    type: 'Grass',
    category: 'Special',
    maxPp: 25,
    power: 20,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Absorb_(move)',
  },
  {
    id: 72,
    name: 'Mega Drain',
    type: 'Grass',
    category: 'Special',
    maxPp: 15,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Mega Drain_(move)',
  },
  {
    id: 73,
    name: 'Leech Seed',
    type: 'Grass',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Leech Seed_(move)',
  },
  {
    id: 74,
    name: 'Growth',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Growth_(move)',
  },
  {
    id: 75,
    name: 'Razor Leaf',
    type: 'Grass',
    category: 'Physical',
    maxPp: 25,
    power: 55,
    accuracy: 95,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Razor Leaf_(move)',
  },
  {
    id: 76,
    name: 'Solar Beam',
    type: 'Grass',
    category: 'Special',
    maxPp: 10,
    power: 120,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Solar Beam_(move)',
  },
  {
    id: 77,
    name: 'Poison Powder',
    type: 'Poison',
    category: 'Status',
    maxPp: 35,
    power: NaN,
    accuracy: 75,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Poison Powder_(move)',
  },
  {
    id: 78,
    name: 'Stun Spore',
    type: 'Grass',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: 75,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Stun Spore_(move)',
  },
  {
    id: 79,
    name: 'Sleep Powder',
    type: 'Grass',
    category: 'Status',
    maxPp: 15,
    power: NaN,
    accuracy: 75,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Sleep Powder_(move)',
  },
  {
    id: 80,
    name: 'Petal Dance',
    type: 'Grass',
    category: 'Special',
    maxPp: 10,
    power: 120,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Petal Dance_(move)',
  },
  {
    id: 81,
    name: 'String Shot',
    type: 'Bug',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: 95,
    url: 'https://bulbapedia.bulbagarden.net/wiki/String Shot_(move)',
  },
  {
    id: 82,
    name: 'Dragon Rage',
    type: 'Dragon',
    category: 'Special',
    maxPp: 10,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Dragon Rage_(move)',
  },
  {
    id: 83,
    name: 'Fire Spin',
    type: 'Fire',
    category: 'Special',
    maxPp: 15,
    power: 35,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Fire Spin_(move)',
  },
  {
    id: 84,
    name: 'Thunder Shock',
    type: 'Electric',
    category: 'Special',
    maxPp: 30,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Thunder Shock_(move)',
  },
  {
    id: 85,
    name: 'Thunderbolt',
    type: 'Electric',
    category: 'Special',
    maxPp: 15,
    power: 90,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Thunderbolt_(move)',
  },
  {
    id: 86,
    name: 'Thunder Wave',
    type: 'Electric',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Thunder Wave_(move)',
  },
  {
    id: 87,
    name: 'Thunder',
    type: 'Electric',
    category: 'Special',
    maxPp: 10,
    power: 110,
    accuracy: 70,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Thunder_(move)',
  },
  {
    id: 88,
    name: 'Rock Throw',
    type: 'Rock',
    category: 'Physical',
    maxPp: 15,
    power: 50,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Rock Throw_(move)',
  },
  {
    id: 89,
    name: 'Earthquake',
    type: 'Ground',
    category: 'Physical',
    maxPp: 10,
    power: 100,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Earthquake_(move)',
  },
  {
    id: 90,
    name: 'Fissure',
    type: 'Ground',
    category: 'Physical',
    maxPp: 5,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Fissure_(move)',
  },
  {
    id: 91,
    name: 'Dig',
    type: 'Ground',
    category: 'Physical',
    maxPp: 10,
    power: 80,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Dig_(move)',
  },
  {
    id: 92,
    name: 'Toxic',
    type: 'Poison',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Toxic_(move)',
  },
  {
    id: 93,
    name: 'Confusion',
    type: 'Psychic',
    category: 'Special',
    maxPp: 25,
    power: 50,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Confusion_(move)',
  },
  {
    id: 94,
    name: 'Psychic',
    type: 'Psychic',
    category: 'Special',
    maxPp: 10,
    power: 90,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Psychic_(move)',
  },
  {
    id: 95,
    name: 'Hypnosis',
    type: 'Psychic',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: 60,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Hypnosis_(move)',
  },
  {
    id: 96,
    name: 'Meditate',
    type: 'Psychic',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Meditate_(move)',
  },
  {
    id: 97,
    name: 'Agility',
    type: 'Psychic',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Agility_(move)',
  },
  {
    id: 98,
    name: 'Quick Attack',
    type: 'Normal',
    category: 'Physical',
    maxPp: 30,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Quick Attack_(move)',
  },
  {
    id: 99,
    name: 'Rage',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 20,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Rage_(move)',
  },
  {
    id: 100,
    name: 'Teleport',
    type: 'Psychic',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Teleport_(move)',
  },
  {
    id: 101,
    name: 'Night Shade',
    type: 'Ghost',
    category: 'Special',
    maxPp: 15,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Night Shade_(move)',
  },
  {
    id: 102,
    name: 'Mimic',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Mimic_(move)',
  },
  {
    id: 103,
    name: 'Screech',
    type: 'Normal',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Screech_(move)',
  },
  {
    id: 104,
    name: 'Double Team',
    type: 'Normal',
    category: 'Status',
    maxPp: 15,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Double Team_(move)',
  },
  {
    id: 105,
    name: 'Recover',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Recover_(move)',
  },
  {
    id: 106,
    name: 'Harden',
    type: 'Normal',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Harden_(move)',
  },
  {
    id: 107,
    name: 'Minimize',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Minimize_(move)',
  },
  {
    id: 108,
    name: 'Smokescreen',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Smokescreen_(move)',
  },
  {
    id: 109,
    name: 'Confuse Ray',
    type: 'Ghost',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Confuse Ray_(move)',
  },
  {
    id: 110,
    name: 'Withdraw',
    type: 'Water',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Withdraw_(move)',
  },
  {
    id: 111,
    name: 'Defense Curl',
    type: 'Normal',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Defense Curl_(move)',
  },
  {
    id: 112,
    name: 'Barrier',
    type: 'Psychic',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Barrier_(move)',
  },
  {
    id: 113,
    name: 'Light Screen',
    type: 'Psychic',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Light Screen_(move)',
  },
  {
    id: 114,
    name: 'Haze',
    type: 'Ice',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Haze_(move)',
  },
  {
    id: 115,
    name: 'Reflect',
    type: 'Psychic',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Reflect_(move)',
  },
  {
    id: 116,
    name: 'Focus Energy',
    type: 'Normal',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Focus Energy_(move)',
  },
  {
    id: 117,
    name: 'Bide',
    type: 'Normal',
    category: 'Physical',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Bide_(move)',
  },
  {
    id: 118,
    name: 'Metronome',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Metronome_(move)',
  },
  {
    id: 119,
    name: 'Mirror Move',
    type: 'Flying',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Mirror Move_(move)',
  },
  {
    id: 120,
    name: 'Self-Destruct',
    type: 'Normal',
    category: 'Physical',
    maxPp: 5,
    power: 200,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Self-Destruct_(move)',
  },
  {
    id: 121,
    name: 'Egg Bomb',
    type: 'Normal',
    category: 'Physical',
    maxPp: 10,
    power: 100,
    accuracy: 75,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Egg Bomb_(move)',
  },
  {
    id: 122,
    name: 'Lick',
    type: 'Ghost',
    category: 'Physical',
    maxPp: 30,
    power: 30,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Lick_(move)',
  },
  {
    id: 123,
    name: 'Smog',
    type: 'Poison',
    category: 'Special',
    maxPp: 20,
    power: 30,
    accuracy: 70,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Smog_(move)',
  },
  {
    id: 124,
    name: 'Sludge',
    type: 'Poison',
    category: 'Special',
    maxPp: 20,
    power: 65,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Sludge_(move)',
  },
  {
    id: 125,
    name: 'Bone Club',
    type: 'Ground',
    category: 'Physical',
    maxPp: 20,
    power: 65,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Bone Club_(move)',
  },
  {
    id: 126,
    name: 'Fire Blast',
    type: 'Fire',
    category: 'Special',
    maxPp: 5,
    power: 110,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Fire Blast_(move)',
  },
  {
    id: 127,
    name: 'Waterfall',
    type: 'Water',
    category: 'Physical',
    maxPp: 15,
    power: 80,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Waterfall_(move)',
  },
  {
    id: 128,
    name: 'Clamp',
    type: 'Water',
    category: 'Physical',
    maxPp: 15,
    power: 35,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Clamp_(move)',
  },
  {
    id: 129,
    name: 'Swift',
    type: 'Normal',
    category: 'Special',
    maxPp: 20,
    power: 60,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Swift_(move)',
  },
  {
    id: 130,
    name: 'Skull Bash',
    type: 'Normal',
    category: 'Physical',
    maxPp: 10,
    power: 130,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Skull Bash_(move)',
  },
  {
    id: 131,
    name: 'Spike Cannon',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 20,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Spike Cannon_(move)',
  },
  {
    id: 132,
    name: 'Constrict',
    type: 'Normal',
    category: 'Physical',
    maxPp: 35,
    power: 10,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Constrict_(move)',
  },
  {
    id: 133,
    name: 'Amnesia',
    type: 'Psychic',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Amnesia_(move)',
  },
  {
    id: 134,
    name: 'Kinesis',
    type: 'Psychic',
    category: 'Status',
    maxPp: 15,
    power: NaN,
    accuracy: 80,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Kinesis_(move)',
  },
  {
    id: 135,
    name: 'Soft-Boiled',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Soft-Boiled_(move)',
  },
  {
    id: 136,
    name: 'High Jump Kick',
    type: 'Fighting',
    category: 'Physical',
    maxPp: 10,
    power: 130,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/High Jump Kick_(move)',
  },
  {
    id: 137,
    name: 'Glare',
    type: 'Normal',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Glare_(move)',
  },
  {
    id: 138,
    name: 'Dream Eater',
    type: 'Psychic',
    category: 'Special',
    maxPp: 15,
    power: 100,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Dream Eater_(move)',
  },
  {
    id: 139,
    name: 'Poison Gas',
    type: 'Poison',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Poison Gas_(move)',
  },
  {
    id: 140,
    name: 'Barrage',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 15,
    accuracy: 85,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Barrage_(move)',
  },
  {
    id: 141,
    name: 'Leech Life',
    type: 'Bug',
    category: 'Physical',
    maxPp: 10,
    power: 80,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Leech Life_(move)',
  },
  {
    id: 142,
    name: 'Lovely Kiss',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: 75,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Lovely Kiss_(move)',
  },
  {
    id: 143,
    name: 'Sky Attack',
    type: 'Flying',
    category: 'Physical',
    maxPp: 5,
    power: 140,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Sky Attack_(move)',
  },
  {
    id: 144,
    name: 'Transform',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Transform_(move)',
  },
  {
    id: 145,
    name: 'Bubble',
    type: 'Water',
    category: 'Special',
    maxPp: 30,
    power: 40,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Bubble_(move)',
  },
  {
    id: 146,
    name: 'Dizzy Punch',
    type: 'Normal',
    category: 'Physical',
    maxPp: 10,
    power: 70,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Dizzy Punch_(move)',
  },
  {
    id: 147,
    name: 'Spore',
    type: 'Grass',
    category: 'Status',
    maxPp: 15,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Spore_(move)',
  },
  {
    id: 148,
    name: 'Flash',
    type: 'Normal',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Flash_(move)',
  },
  {
    id: 149,
    name: 'Psywave',
    type: 'Psychic',
    category: 'Special',
    maxPp: 15,
    power: NaN,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Psywave_(move)',
  },
  {
    id: 150,
    name: 'Splash',
    type: 'Normal',
    category: 'Status',
    maxPp: 40,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Splash_(move)',
  },
  {
    id: 151,
    name: 'Acid Armor',
    type: 'Poison',
    category: 'Status',
    maxPp: 20,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Acid Armor_(move)',
  },
  {
    id: 152,
    name: 'Crabhammer',
    type: 'Water',
    category: 'Physical',
    maxPp: 10,
    power: 100,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Crabhammer_(move)',
  },
  {
    id: 153,
    name: 'Explosion',
    type: 'Normal',
    category: 'Physical',
    maxPp: 5,
    power: 250,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Explosion_(move)',
  },
  {
    id: 154,
    name: 'Fury Swipes',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 18,
    accuracy: 80,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Fury Swipes_(move)',
  },
  {
    id: 155,
    name: 'Bonemerang',
    type: 'Ground',
    category: 'Physical',
    maxPp: 10,
    power: 50,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Bonemerang_(move)',
  },
  {
    id: 156,
    name: 'Rest',
    type: 'Psychic',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Rest_(move)',
  },
  {
    id: 157,
    name: 'Rock Slide',
    type: 'Rock',
    category: 'Physical',
    maxPp: 10,
    power: 75,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Rock Slide_(move)',
  },
  {
    id: 158,
    name: 'Hyper Fang',
    type: 'Normal',
    category: 'Physical',
    maxPp: 15,
    power: 80,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Hyper Fang_(move)',
  },
  {
    id: 159,
    name: 'Sharpen',
    type: 'Normal',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Sharpen_(move)',
  },
  {
    id: 160,
    name: 'Conversion',
    type: 'Normal',
    category: 'Status',
    maxPp: 30,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Conversion_(move)',
  },
  {
    id: 161,
    name: 'Tri Attack',
    type: 'Normal',
    category: 'Special',
    maxPp: 10,
    power: 80,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Tri Attack_(move)',
  },
  {
    id: 162,
    name: 'Super Fang',
    type: 'Normal',
    category: 'Physical',
    maxPp: 10,
    power: NaN,
    accuracy: 90,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Super Fang_(move)',
  },
  {
    id: 163,
    name: 'Slash',
    type: 'Normal',
    category: 'Physical',
    maxPp: 20,
    power: 70,
    accuracy: 100,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Slash_(move)',
  },
  {
    id: 164,
    name: 'Substitute',
    type: 'Normal',
    category: 'Status',
    maxPp: 10,
    power: NaN,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Substitute_(move)',
  },
  {
    id: 165,
    name: 'Struggle',
    type: 'Normal',
    category: 'Physical',
    maxPp: 1,
    power: 50,
    accuracy: NaN,
    url: 'https://bulbapedia.bulbagarden.net/wiki/Struggle_(move)',
  },
];
