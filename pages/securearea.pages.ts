/**
 * Page Object Model for the secure area screen shown after a successful login.
 * Encapsulates the elements and action required to end the user session.
 */
import { test, Page, Locator } from "@playwright/test";

export class SecureAreaPage {
  readonly page: Page;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.getByRole("link", { name: "Logout" });
  }

  /**
   * Clicks the logout link to navigate back to the login screen.
   */
  async logout() {
    await test.step("Logout from the secure area", async () => {
      await this.logoutLink.click();
    });
  }
}