import { test, expect } from "@playwright/test";

const legalPages = [
  { path: "/privacy.html", titlePattern: /Privacy/i },
  { path: "/terms.html", titlePattern: /Terms/i },
  { path: "/security.html", titlePattern: /Security/i },
];

for (const { path, titlePattern } of legalPages) {
  test(`${path} loads and has correct title`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(titlePattern);

    const heading = page.locator("h1").first();
    await expect(heading).toBeVisible();
  });
}
