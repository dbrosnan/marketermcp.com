import { test, expect } from "@playwright/test";

const criticalPaths = [
  "/",
  "/blog/",
  "/faq.html",
  "/privacy.html",
  "/terms.html",
  "/security.html",
];

for (const path of criticalPaths) {
  test(`${path} returns 200 and renders content`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);

    const body = page.locator("body");
    await expect(body).not.toBeEmpty();
  });
}

test("sitemap.xml is accessible", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain("<urlset");
});

test("robots.txt is accessible", async ({ request }) => {
  const response = await request.get("/robots.txt");
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain("Sitemap:");
});
