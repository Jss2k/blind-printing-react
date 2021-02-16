export const words = (char) => char / 5;

export const minutes = (seconds) => seconds / 60;

export const wpmNormal = (char, seconds) =>
  Math.round(words(char) / minutes(seconds)) || 0;

export const countCorrectCharacters = (text, input) => {
  const tc = text.replace(' ', '');
  const ic = input.replace(' ', '');
  return ic.split('').filter((c, i) => c === tc[i]).length;
};