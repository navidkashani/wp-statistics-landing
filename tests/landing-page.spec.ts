import { test, expect } from "@playwright/test";

test.describe("WP Statistics Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display the header with logo and navigation", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("header").getByRole("link").first()).toBeVisible();
    await expect(page.locator("header").getByRole("link", { name: "Features" })).toBeVisible();
    await expect(page.locator("header").getByRole("link", { name: "Demo" })).toBeVisible();
    await expect(page.locator("header").getByRole("link", { name: "Privacy" })).toBeVisible();
    await expect(page.locator("header").getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(page.locator("header").getByRole("link", { name: "FAQ" })).toBeVisible();
  });

  test("should display hero section with CTA", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Know Your/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Download Free/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /See Live Demo/i })).toBeVisible();
  });

  test("should display trust badges in hero", async ({ page }) => {
    await expect(page.getByText("No cookies required").first()).toBeVisible();
    await expect(page.getByText("GDPR compliant").first()).toBeVisible();
    await expect(page.getByText("Open source").first()).toBeVisible();
  });

  test("should display features section with feature cards", async ({ page }) => {
    await page.locator("#features").scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Privacy First" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Real-Time Analytics" })).toBeVisible();
  });

  test("should display interactive dashboard demo", async ({ page }) => {
    await page.locator("#dashboard-demo").scrollIntoViewIfNeeded();
    await expect(page.getByText("Interactive Demo")).toBeVisible();
    await expect(page.getByRole("button", { name: /Overview/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Real-time/i })).toBeVisible();
  });

  test("should switch tabs in dashboard demo", async ({ page }) => {
    await page.locator("#dashboard-demo").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: /Geographic/i }).click();
    await expect(page.getByText("Top Countries")).toBeVisible();
  });

  test("should display privacy section", async ({ page }) => {
    await page.locator("#privacy").scrollIntoViewIfNeeded();
    await expect(page.getByText("Privacy-First Analytics")).toBeVisible();
    await expect(page.getByText("No Cookie Consent Required")).toBeVisible();
    await expect(page.getByText("GDPR", { exact: true })).toBeVisible();
  });

  test("should display testimonials with carousel", async ({ page }) => {
    const testimonials = page.locator("section").filter({ hasText: "Loved by Users" });
    await testimonials.scrollIntoViewIfNeeded();
    await expect(page.getByText("600,000+ Websites")).toBeVisible();
  });

  test("should display pricing section", async ({ page }) => {
    await page.locator("#pricing").scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Free", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pro Add-ons" })).toBeVisible();
    await expect(page.getByText("$0")).toBeVisible();
    await expect(page.getByText("$99")).toBeVisible();
  });

  test("should display FAQ section with expandable items", async ({ page }) => {
    await page.locator("#faq").scrollIntoViewIfNeeded();
    await expect(page.getByText("Got Questions?")).toBeVisible();
    await expect(page.getByText("Is WP Statistics really free?")).toBeVisible();
  });

  test("should expand FAQ item on click", async ({ page }) => {
    await page.locator("#faq").scrollIntoViewIfNeeded();
    await page.getByText("Do I need cookie consent banners").click();
    await expect(page.getByText("WP Statistics doesn't use cookies by default")).toBeVisible();
  });

  test("should display footer", async ({ page }) => {
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();
    await expect(footer.getByText("Product")).toBeVisible();
    await expect(footer.getByText("Resources")).toBeVisible();
  });

  test("should have working CTA links", async ({ page }) => {
    const downloadLink = page.getByRole("link", { name: /Download Free/i }).first();
    await expect(downloadLink).toHaveAttribute("href", "https://wordpress.org/plugins/wp-statistics/");
    await expect(downloadLink).toHaveAttribute("target", "_blank");
  });

  test("should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator("header")).toBeVisible();
    await expect(page.getByRole("heading", { name: /Know Your/i }).first()).toBeVisible();
  });

  test("should be responsive on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator("header")).toBeVisible();
    await expect(page.getByRole("heading", { name: /Know Your/i }).first()).toBeVisible();
  });

  test("should be responsive on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(page.locator("header")).toBeVisible();
    await expect(page.getByRole("heading", { name: /Know Your/i }).first()).toBeVisible();
  });
});
