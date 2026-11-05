# The Internet Page

End-to-end automation project using Playwright for the public website "The Internet".

## Requirements

To run this project successfully on another machine, use the following minimum and recommended versions:

- Node.js 18+ (recommended: 20 LTS or newer)
- npm 9+ (recommended: 10.x)
- Playwright 1.64.1 or newer (installed via the project dependencies)
- TypeScript 5.8.3 or newer (included as a dev dependency)
- Chromium, Firefox, and WebKit browsers for Playwright, installed locally with:

```bash
npx playwright install
```

This project has been validated with the current local dependency set in `package.json` and works on Windows, macOS, and Linux.

## Installation

1. Clone the repository.
2. Open a terminal in the project root.
3. Install the dependencies:

```bash
npm install
```

4. Install the browser binaries required by Playwright:

```bash
npx playwright install
```

5. Verify the setup:

```bash
npx playwright test --list
```

This installs the project dependencies and downloads the browsers used by the automation suite.

## How to run the tests

From the project root:

```bash
npx playwright test
```

To run a specific test:

```bash
npx playwright test tests/valid-login.spec.ts
```

To open the generated HTML report:

```bash
npx playwright show-report
```

## Project structure

```text
TheInternetPage/
├── data/
│   ├── credentials.data.ts
│   └── msjs.data.ts
├── fixtures/
│   ├── base.fixtures.ts
├── pages/
│   ├── login.pages.ts
│   └── securearea.pages.ts
├── tests/
│   ├── invalid-login.spec.ts
│   ├── logout.spec.ts
│   └── valid-login.spec.ts
├── playwright.config.ts
├── package.json
├── README.md
├── test-results/
├── playwright-report/
└── node_modules/
```

## Design decisions

- The browser interaction logic was separated into the `pages/` folder so each page has a dedicated Page Object Model, making tests more readable, reusable, and easier to maintain.
- User credentials and success/error messages were centralized in `data/` to avoid duplication and keep assertions consistent across scenarios.
- A reusable base fixture in `fixtures/base.fixtures.ts` was added to share common Playwright custom fixtures, while the login fixture keeps the login page setup in one place.
- The login fixture continues to open the login page before each test, reducing repeated navigation logic and standardizing the suite's initial state.
- Tests are organized by scenario: valid login, invalid login, and logout. This makes selective execution easier and supports growth as new flows are added.
- The project follows a clear testing architecture: data layer, fixture layer, page object layer, and test layer, which keeps the suite scalable and maintainable.

## Notes

This project is intended as a foundation for practicing Playwright automation and structuring test suites in a clean, maintainable way.
