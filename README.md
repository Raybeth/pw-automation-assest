# The Internet - Login Tests

Automated tests for the login page of https://the-internet.herokuapp.com/login,
written with Playwright and TypeScript.

## Requirements

- Node.js 18 or newer
- npm

## Setup

```bash
git clone https://github.com/Raybeth/pw-automation-assest.git
cd pw-automation-assest
npm install
npx playwright install
```

## Running the tests

```bash
npx playwright test
```

Other useful commands:

```bash
npx playwright test --grep @smoke     # only the smoke test
npx playwright test --project=chromium
npx playwright test --headed
npx playwright show-report
```

By default the tests run on Chromium, Firefox and WebKit.

## What is tested

- TC-01: valid login goes to the secure area
- TC-02: invalid username shows an error and stays on the login page
- TC-03: invalid password shows an error and stays on the login page
- TC-04: logout goes back to the login page

## Project structure

```text
data/        credentials and expected messages
fixtures/    fixtures that create the page objects
pages/       page objects
tests/       test files
.github/     GitHub Actions workflow
```

## How it is organized

Each page has its own page object with its locators and actions. The tests only
call those actions and do the assertions, so the same `login` method is used for
the valid and invalid cases.

The fixture opens the login page before each test, which keeps the tests
independent from each other.

Credentials and messages are in `data/`. The credentials are the public ones
given for this practice site.

The GitHub Actions workflow runs the tests on every push to main.