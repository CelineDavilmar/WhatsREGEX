# Valid Email - REGEX

A regex expression that verfiys if a given string is a valid email.

## Summary

This document will help users to understand the how to use regular expression to confirm if an email input is correct and or valid.

"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Character Classes](#character-classes)
- [Bracket Expressions](#bracket-expressions)
- [Greedy](#greedy-match)

## Regex Components

### Anchors

The anchors in this regex are the caret symbol "^", and dollar symbol "$". The caret matches the start of the string and the dollar sign matches the end of the string.

### Quantifiers

The qualifying character for this REGEX is the + symbol. Which means one or more.

### Character Classes

The character classes in this REGEX is [A-Za-z0-9_-] which will allow it to take any characters from a-z as well as symbols which are needed to correctly inut emails such as the @ symbol and the period "." symbol.

### Bracket Expressions

The bracket expressions in this REGEX is very similar to the character class as it is everything that lies within the brackets. [A-Za-z0-9_-], and [a-zA-Z0-9.-], which is basically advising to include numbers, lowercase and upper case letters.

### Greedy Match

A greedy search/match is when the expression tries to match every position in the string because of the ".+".

## Author

I am a fullstack developer with experience in react and node.js. Feel free to look at some of my projects https://github.com/CelineDavilmar.

