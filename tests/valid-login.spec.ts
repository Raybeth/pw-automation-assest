/**
 * Validates the happy-path authentication flow.
 * Confirms the user can log in and reach the secure area.
 */
import { test, expect } from "../fixtures/base.fixtures";
import { validCredentials } from "../data/credentials.data";
import { messages } from "../data/msjs.data";

test("TC-01 login exitoso redirige al área segura ", { tag: "@smoke" }, async ({
  page,
  loginPage,
}) => {
  await loginPage.login(validCredentials.username, validCredentials.password);
  await expect(page).toHaveURL(/\/secure$/);
  await expect(loginPage.flashMessage).toContainText(messages.loginSuccess);
});
