import { test, expect } from '@playwright/test';

test.describe('Navbar Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Test button existence', async ({ page }) => {
    const homeButton = page.locator('[aria-label="Home button"]');
    const uploadButton = page.locator('[aria-label="Login button"]');
    const itemsButton = page.locator('[aria-label="Items button nav"]');

    await expect(homeButton).toBeTruthy();
    await expect(uploadButton).toBeTruthy();
    await expect(itemsButton).toBeTruthy();
  });

  test('Test button navigation', async ({ page }) => {
    const homeButton = page.locator('[aria-label="Home button"]');
    await homeButton.click();
    await expect(page.url()).toContain('/');

    const itemsButton = page.locator('[aria-label="Items button nav"]');
    await itemsButton.click();
    await page.waitForURL('http://localhost:3000/items');
    await expect(page.url()).toContain('/items');
  });
});
