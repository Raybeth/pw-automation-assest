import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.pages";
import { SecureAreaPage } from "../pages/securearea.pages";

export const test = base.extend<{
  loginPage: LoginPage;
  secureAreaPage: SecureAreaPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await use(loginPage);
  },
  secureAreaPage: async ({ page }, use) => {
    await use(new SecureAreaPage(page));
  },
});

export { expect } from "@playwright/test";