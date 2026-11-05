import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * Detect whether the suite is running in CI so we can enable stricter checks and
 * safer execution settings than the local developer workflow.
 */
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  /* Run test files in parallel for faster local execution. */
  fullyParallel: true,
  /* Prevent accidental test.only commits in CI build pipelines. */
  forbidOnly: isCI,
  /* Retry failed tests only in CI to reduce flaky builds without hiding local issues. */
  retries: isCI ? 2 : 0,
  /* Use a single worker in CI to keep output and resource usage predictable. */
  workers: isCI ? 1 : undefined,
  /* Generate an HTML report for each test run. */
  reporter: 'html',
  /* Shared browser and page settings used by all configured projects. */
  use: {
    /* Base URL for the public Heroku app under test. */
    baseURL: 'https://the-internet.herokuapp.com/',

    /* Capture a trace only when a test is retried, to save time and disk space on first runs. */
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
  },

  /* Execute the suite against Chromium, Firefox, and WebKit. */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
