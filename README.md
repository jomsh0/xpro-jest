# Module 9 / Testing with Jest
## MIT xPRO Professional Certificate in Coding

This project demonstrates the use of Jest to test a small library of string utility functions. The library and test implementation are copied from my module 9 assignment in the course platform.

## Setup

```
$ git clone https://github.com/jomsh0/xpro-jest
$ cd xpro-jest
$ npm install
```

## Sample Output

```
$ npm run test

 PASS  ./test.js
  reverse()
    ✓ The function 'reverse' should reverse a string (1 ms)
  isPalindrome()
    ✓ The function 'isPalindrome' should check for palindromes correctly
  capitalizeWords()
    ✓ The function 'capitalizeWords' should capitalize the right words
  toTitleCase()
    ✓ The function 'toTitleCase' should capitalize the right words

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.061 s, estimated 1 s
```
