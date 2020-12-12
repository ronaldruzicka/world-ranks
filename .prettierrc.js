// Docs: https://prettier.io/docs/en/options.html

module.exports = {
  semi: false, // Print semicolons at the ends of statements.
  trailingComma: 'all', // Trailing commas wherever possible (including function arguments). This requires node 8 or a transform.
  singleQuote: true, // Use single quotes instead of double quotes.
  printWidth: 100, // Specify the line length that the printer will wrap on.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
  useTabs: false, // Indent lines with tabs instead of spaces.
  bracketSpacing: true, // Print spaces between brackets in object literals.
  arrowParens: 'always', // Include parentheses around a sole arrow function parameter.
  endOfLine: 'lf', // Line Feed only (\n), common on Linux and macOS as well as inside git repos
}
