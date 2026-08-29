import { expect, test } from "@playwright/test";

test("renders the personal hub and its primary sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "A home for the things I make." })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Things with a life of their own." }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Find me around the web." })).toBeVisible();
  await expect(page.locator('link[rel="manifest"]')).toHaveCount(0);
});

test("changes the expanded project details", async ({ page }) => {
  await page.goto("/#projects");

  const secondProject = page.getByRole("button", { name: /Project Two/ });
  await secondProject.click();
  await expect(secondProject).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.locator("#project-details").getByRole("heading", { name: "Project Two" }),
  ).toBeVisible();
});

test("renders the client-side fallback route", async ({ page }) => {
  await page.goto("/missing-page");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
