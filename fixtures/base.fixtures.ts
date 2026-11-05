/**
 * These are custom fixtures centralize page creation and navigation.
 */
import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.pages";
import { SecureAreaPage } from "../pages/securearea.pages";

export const test = base.extend<{
  loginPage: LoginPage;
  secureAreaPage: SecureAreaPage;
}>({
  /**
   * Opens the login page before each test that requests this fixture.
   */
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await use(loginPage);
  },

  /**
   * Provides access to the secure area page object without extra setup.
   */
  secureAreaPage: async ({ page }, use) => {
    await use(new SecureAreaPage(page));
  },
});

export { expect } from "@playwright/test";