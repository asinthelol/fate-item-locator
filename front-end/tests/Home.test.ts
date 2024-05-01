import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Test webpage title', async ({ page }) => {
    await expect(page).toHaveTitle('Fate Item Locator');
  });

  test('Test header tags visibility', async ({ page }) => {
    const header1 = await page.textContent('h1:first-of-type');
    const header2 = await page.textContent('[data-testid="colored"]');

    expect(header1).toBe('Want it, Search it');
    expect(header2).toBe('Get it.');
  });

  test('Test p tags visibility', async ({ page }) => {
    const text1 = await page.textContent('[data-testid="gray-1"]');
    const text2 = await page.textContent('[data-testid="gray-2"]');

    expect(text1).toBe('Find what you need,'); // Validate first paragraph
    expect(text2).toBe('just like that.'); // Validate second paragraph
  });

  test('Test button existence', async ({ page }) => {
    const homeButton = page.locator('a[aria-label="Home Button"]');
    const uploadButton = page.locator('[data-testid="upload-button"]');
    const itemsButton1 = page.locator('[data-testid="special-button-1"]');
    const itemsButton2 = page.locator('[data-testid="special-button-2"]');

    await expect(homeButton).toBeTruthy();
    await expect(uploadButton).toBeTruthy();
    await expect(itemsButton1).toBeTruthy();
    await expect(itemsButton2).toBeTruthy();
  });

  test('Test button navigation', async ({ page }) => {
    const itemsButton = page.locator('[data-testid="special-button-2"]');
    await itemsButton.click();
    await expect(page.url()).toContain('#');
  });

  // Accessibility test
  test('Test button roles', async ({ page }) => {
    const homeButton = page.locator('[data-testid="home-button"]');
  
    expect(await homeButton.getAttribute('role')).toBe('link');
  });
});
