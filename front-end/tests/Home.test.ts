import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Test webpage title', async ({ page }) => {
    await expect(page).toHaveTitle('Home | Item Locator');
  });

  test('Test header tags visibility', async ({ page }) => {
    const header1 = await page.textContent('h1:first-of-type');
    const header2 = await page.textContent('[aria-label="colored-heading"]');

    expect(header1).toBe('Want it, Search it,');
    expect(header2).toBe('Get it.');
  });

  test('Test p tags visibility', async ({ page }) => {
    const text1 = await page.textContent('[aria-label="sub-heading-1"]');
    const text2 = await page.textContent('[aria-label="sub-heading-2"]');

    expect(text1).toBe('Find what you need,');
    expect(text2).toBe('just like that.');
  });

  test('Test button existence', async ({ page }) => {
    const itemsButton = page.locator('[aria-label="items-button-link-home"]');
    await expect(itemsButton).toBeTruthy();
  });

  test('Test button navigation', async ({ page }) => {
    const itemsButton = page.locator('[aria-label="items-button-link-home"]');
    await itemsButton.click();
    
    await page.waitForURL('http://localhost:3000/items');
    await expect(page.url()).toContain('/items');
  });
});
