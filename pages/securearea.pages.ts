import { test, Page, Locator } from "@playwright/test";

export class SecureAreaPage {
  readonly page: Page;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.getByRole("link", { name: "Logout" });
  }

  async logout() {
    await test.step("Logout from the secure area", async () => {
      await this.logoutLink.click();
    });
  }
}