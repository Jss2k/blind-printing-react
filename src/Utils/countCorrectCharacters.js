export const words = (char) => char / 5;

export const minutes = (seconds) => seconds / 60;

export const wpmGross = (char, seconds) => {
  let gross = Math.round(words(char) / minutes(seconds)) 

  if (gross === Infinity) {
    return 0
  }
  return gross
}

export const countCorrectCharacters = (text, input) => {
  return input.split('').filter((c, i) => c === text[i]).length
}

export const countErrorCharacters = (text, input) => {
  return input.split('').filter((c, i) => c !== text[i]).length
}

export const wpmNet = (char, seconds, uncorerror) => {
  let net = Math.round((words(char) - uncorerror) / minutes(seconds) )

  if (net === Infinity || net < 0) {
    return 0
  }
  return net
}
