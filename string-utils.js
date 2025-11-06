export function reverse(str) {
  return [...str].reverse().join("")
}

export function isPalindrome(str) {
  const normStr = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "")
  return normStr === reverse(normStr)
}

// Capitalize the first letter of each word in the string.
export function capitalizeWords(str) {
  return str.split(" ").map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ")
}

export function toTitleCase(str) {
  // Utility to capitalize a single word
  const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1)

  // The list of words to ignore can be found in the 'nonCapitalizedWords' array.
  const capWords = str.split(" ").map(
    word => nonCapitalizedWords.includes(word)
      ? word
      : capitalize(word)
  )

  // The first letter of the first word should always be capitalized.
  capWords[0] = capWords[0] && capitalize(capWords[0])

  return capWords.join(" ")
}

const nonCapitalizedWords = [
  "the",
  "of",
  "a",
  "and",
  "an",
  "or",
  "nor",
  "but",
  "is",
  "if",
  "then",
  "else",
  "when",
  "at",
  "from",
  "by",
  "on",
  "off",
  "for",
  "in",
  "out",
  "over",
  "to",
];
