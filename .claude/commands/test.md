Run tests for the calendar app.

Check if a test framework is configured:
1. Look for test scripts in package.json
2. Check for vitest, jest, or testing-library dependencies

If tests exist:
- Run the test suite
- Report results with pass/fail counts
- For any failures, analyze and fix them

If no tests are set up:
- Ask if the user wants to add testing
- Suggest vitest (works well with Vite)
- Offer to create initial test files for core components