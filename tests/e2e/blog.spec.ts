import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Blog", () => {
  test("blog index loads and lists posts", async ({ page }) => {
    await page.goto("/blog/");
    await expect(page).toHaveTitle(/Blog|Marketer MCP/i);

    const postLinks = page.locator("a[href*='/blog/']");
    const count = await postLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("blog index passes accessibility checks", async ({ page }) => {
    await page.goto("/blog/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test("individual blog post renders content", async ({ page }) => {
    await page.goto("/blog/why-marketer-mcp.html");
    const heading = page.locator("h1").first();
    await expect(heading).toBeVisible();
    const content = page.locator("article, main, .post-content").first();
    await expect(content).toBeVisible();
  });
});
