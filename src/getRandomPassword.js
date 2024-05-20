const words = [
  "seat",
  "pen",
  "broad",
  "vapor",
  "ocean",
  "red",
  "plate",
  "late",
  "that",
  "ring",
  "swim",
  "shown",
  "path",
  "law",
  "list",
  "hard",
  "plate",
  "block",
  "two",
  "pupil",
  "were",
  "lot",
  "pay",
  "would",
  "tired",
  "dull",
  "mud",
  "sky",
  "grew",
  "hard",
  "ill",
  "frame",
  "sport",
  "did",
  "many",
  "been",
  "page",
  "year",
  "trail",
  "earth",
  "are",
  "while",
  "off",
  "town",
  "doing",
  "size",
  "steel",
  "sale",
  "swam",
  "put",
  "zero",
  "week",
  "mill",
  "past",
  "aside",
  "her",
  "cent",
  "box",
  "fuel",
  "block",
  "those",
  "late",
  "sun",
  "map",
  "silk",
  "lady",
  "meant",
  "still",
  "shine",
  "range",
  "loud",
  "fox",
  "gate",
  "slide",
  "each",
  "nails",
  "flag",
  "exist",
  "door",
  "luck",
  "down",
  "poem",
  "depth",
  "press",
  "crowd",
  "herd",
  "drink",
  "worry",
  "dried",
  "dig",
  "new",
  "rest",
  "play",
  "win",
  "strong",
];

function getRandomPassword() {
  const chars = "0123456789!@#$%&";
  const clength = chars.length;
  let password = "";

  while (password.length < 20) {
    password += getRandomWord();
    password += chars[getRandomNumber(clength)];
  }

  password = password.substring(0, 16);

  return password;
}

function getRandomNumber(l) {
  return Math.floor(Math.random() * l);
}

function getRandomWord() {
  const number = getRandomNumber(words.length);
  return words[number];
}

export default getRandomPassword;
