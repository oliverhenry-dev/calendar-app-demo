Find and fix issues in the calendar app codebase.

Scan the source files in `src/` for:
1. Syntax errors
2. Missing imports
3. Undefined variables
4. React anti-patterns (missing keys, stale closures, etc.)
5. Accessibility issues (missing alt text, ARIA labels)

For each issue found:
- Report the file and line
- Explain the problem
- Apply the fix

After fixing, run `npm run build` to verify everything compiles.