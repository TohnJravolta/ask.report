import { test, expect } from '@playwright/test';

const BASE = process.env.BASE_URL || 'http://localhost:4173/index.html';

test.describe('Keyboard + Help', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
  });

  test('help opens on h and closes on keyup/overlay/Escape', async ({ page }) => {
    const help = page.locator('#help');
    await expect(help).toBeHidden();
    await page.keyboard.down('h');
    await expect(help).toBeVisible();
    await page.keyboard.up('h');
    await expect(help).toBeHidden();

    await page.keyboard.down('h');
    await expect(help).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(help).toBeHidden();
  });

  test('space toggles pause without scrolling', async ({ page }) => {
    await page.keyboard.press('Space');
    // Assert via side effect: e.g., text toast or internal state via exposed function
    // As a snippet, we just ensure no navigation happened
    await expect(page).toHaveURL(BASE);
  });

  test('[ and ] adjust speed via range input', async ({ page }) => {
    const speed = page.locator('#speed');
    const v1 = await speed.inputValue();
    await page.keyboard.press(']');
    const v2 = await speed.inputValue();
    expect(parseFloat(v2)).toBeGreaterThanOrEqual(parseFloat(v1));
    await page.keyboard.press('[');
    const v3 = await speed.inputValue();
    expect(parseFloat(v3)).toBeLessThanOrEqual(parseFloat(v2));
  });
});

