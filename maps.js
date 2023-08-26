/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
  '-': ' ',
  'O': '🚪',
  'X': '💣',
  'I': '🎁',
  'PLAYER': '💀',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '👎',
  'WIN': '🏆',
};

const maps = [];
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
//mapa 5
// maps.push(`
//   XXXXXXXXXX
//   XXXX---OXX
//   XX-XXXXXXX
//   X--XXXXXXX
//   X-XXXXXXXX
//   X--XX---XX
//   XX--XXX-XX
//   XXXXXX-XXX
//   XX-----IXX
//   XXXXXXXXXX
// `);

// maps.push(`
//   IXXXXXXXXX
//   -XXXXXXXXX
//   -XXXXXXXXX
//   -XXXXXXXXX
//   -XXXXXXXXX
//   XXXXXX-XXX
//   X--XX---XX
//   XX--XXX-XX
//   XXXXXX-XXX
//   XXXXXXXXXX
// `);

// maps.push(`
//   XXXXXXXXXX
//   XX----XXXX
//   XX-XXXXXXX
//   X--XX---XX
//   X--XXX-XXX
//   XXXXX--XXX
//   X--XXX-XXX
//   XX--XX--XX
//   XX---O--XX
//   XXXXXXXXXX
// `);


