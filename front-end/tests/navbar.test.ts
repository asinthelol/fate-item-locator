import { test, expect } from '@playwright/test';

test.describe('Navbar Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Test button existence', async ({ page }) => {
    const homeButton = page.locator('[aria-label="home-button-link"]');
    const uploadButton = page.locator('[aria-label="upload-button-link"]');
    const itemsButton = page.locator('[aria-label="items-button-link"]');

    await expect(homeButton).toBeTruthy();
    await expect(uploadButton).toBeTruthy();
    await expect(itemsButton).toBeTruthy();
  });

  test('Test button navigation', async ({ page }) => {
    const homeButton = page.locator('[aria-label="home-button-link"]');
    await homeButton.click();
    await expect(page.url()).toContain('/');

    const itemsButton = page.locator('[aria-label="items-button-link-nav"]');
    await itemsButton.click();
    await page.waitForURL('http://localhost:3000/items');
    await expect(page.url()).toContain('/items');
  });
});
