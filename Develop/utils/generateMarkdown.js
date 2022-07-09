function generateMarkdown(data) {
    return `
  # ${data.title}

${data.introductoryParagraph}

## Summary
${data.Summary}

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components
${data.components}

### Anchors
${data.anchors}

### Quantifiers
${data.quantifiers}

### OR Operator
${data.Operator}

### Character Classes
${data.classes}

### Flags
${data.Flags}

### Grouping and Capturing
${data.grouping}

### Bracket Expressions
${data.bracketExpressions}

### Greedy and Lazy Match
${data.greedy}

### Boundaries
${data.boundaries}

### Back-references
${data.ref}

### Look-ahead and Look-behind
${data.aheadbehind}

## Author
${data.author}

`;
}

module.exports = generateMarkdown;