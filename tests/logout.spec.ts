import { test, expect } from "../fixtures/base.fixtures";
import { validCredentials } from "../data/credentials.data";
import { messages } from "../data/msjs.data";

test("TC-04 logout returns to the login page", async ({
  page,
  loginPage,
  secureAreaPage,
}) => {
  await loginPage.login(validCredentials.username, validCredentials.password);
  await expect(page).toHaveURL(/\/secure$/);

  await secureAreaPage.logout();

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText(messages.logoutSuccess);
});
