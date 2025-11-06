import { reverse, isPalindrome, capitalizeWords, toTitleCase } from './string-utils.js'

describe("reverse()", () => {
  test("The function 'reverse' should reverse a string", () => {
    expect(reverse("hello"))
      .toBe("olleh")
    expect(reverse("racecar"))
      .toBe("racecar")
    expect(reverse("a"))
      .toBe("a")
    expect(reverse("123"))
      .toBe("321")
  })
})

describe("isPalindrome()", () => {
  test("The function 'isPalindrome' should check for palindromes correctly", () => {
    expect(isPalindrome("racecar"))
      .toBe(true)
    expect(isPalindrome("hello"))
      .toBe(false)
    expect(isPalindrome("madam"))
      .toBe(true)
    expect(isPalindrome("123"))
      .toBe(false)
  })
})

describe("capitalizeWords()", () => {
  test("The function 'capitalizeWords' should capitalize the right words", () => {
    expect(capitalizeWords("hello world"))
      .toBe("Hello World")
    expect(capitalizeWords("the quick brown fox jumps over the lazy dog"))
      .toBe("The Quick Brown Fox Jumps Over The Lazy Dog")
    expect(capitalizeWords("a"))
      .toBe("A")
    expect(capitalizeWords("123"))
      .toBe("123")
  })
})

describe("toTitleCase()", () => {
  test("The function 'toTitleCase' should capitalize the right words", () => {
    expect(toTitleCase("hello world"))
      .toBe("Hello World")
    expect(toTitleCase("the quick brown fox jumps over the lazy dog"))
      .toBe("The Quick Brown Fox Jumps over the Lazy Dog")
    expect(toTitleCase("a"))
      .toBe("A")
    expect(toTitleCase("123"))
      .toBe("123")
  })
})
