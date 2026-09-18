import { expect, test } from "@playwright/test";

test("renders the personal hub and its primary sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Software developer/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Selected projects" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Around the web" })).toBeVisible();
  const cvLinks = page.getByRole("link", { name: "Download CV" });
  await expect(cvLinks).toHaveCount(3);
  await expect(cvLinks.first()).toHaveAttribute("download", "Leke-Sahatqija-CV.pdf");
  await expect(cvLinks.last()).toHaveAttribute("download", "Leke-Sahatqija-CV.pdf");
  await expect(
    page
      .getByRole("navigation", { name: "Contact and social links" })
      .getByRole("link", { name: "Download CV" }),
  ).toHaveAttribute("download", "Leke-Sahatqija-CV.pdf");
  await expect(page.getByRole("link", { name: "itch.io Games and experiments" })).toHaveAttribute(
    "href",
    "https://lsah.itch.io",
  );
  await expect(page.locator('link[rel="manifest"]')).toHaveCount(0);
});

test("browses the project carousel", async ({ page }) => {
  await page.goto("/#projects");

  await page.getByRole("button", { name: "Next project" }).click();
  await expect(page.getByText("02 / 04")).toBeVisible();
});

test("renders the client-side fallback route", async ({ page }) => {
  await page.goto("/missing-page");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
