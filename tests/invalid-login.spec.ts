import { test, expect } from "../fixtures/base.fixtures";
import { invalidUsername, invalidPassword } from "../data/credentials.data";
import { messages } from "../data/msjs.data";


test("TC-02 login fails with an invalid username", async ({ page, loginPage, }) => {
  await loginPage.login(invalidUsername.username, invalidUsername.password);

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText(messages.invalidUsername);
});

test("TC-03 login fails with an invalid password", async ({ page, loginPage, }) => {
  await loginPage.login(invalidPassword.username, invalidPassword.password);

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText(messages.invalidPassword);
});

