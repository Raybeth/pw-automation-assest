import { test, Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByLabel("Username");
    this.password = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.flashMessage = page.locator("#flash");
  }

  async goToLoginPage() {
    await this.page.goto("/login");
  }

  async login(username: string, password: string) {
    await test.step(`Login as "${username}"`, async () => {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
    });
  }
}
