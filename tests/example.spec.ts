import { test, expect } from '@playwright/test';
import { strict } from 'assert';

test('has title', async ({ baseURL, page }) => {
  strict(baseURL, 'baseURL is required')  

  await page.goto(baseURL);

  await expect(page).toHaveTitle(/Create Next App/);
  await expect(page).toHaveScreenshot();
});
