// tests/login-failure.spec.js
import { test, expect } from '@playwright/test';

test('invalid credentials display an error message', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Use invalid credentials
  await page.locator('input[id="username"]').fill('incorrectUser');
  await page.locator('input[id="password"]').fill('wrongPassword123');

  // Click the submit button
  await page.locator('button[id="submit"]').click();

  // *** Validation Steps ***

  // 1. Assert that the error message element is visible
  const errorMessage = page.locator('#error');
  await expect(errorMessage).toBeVisible();

  // 2. Assert that the error message text is correct
  await expect(errorMessage).toHaveText('Your username is invalid!');

  // 3. Assert that the URL has not changed (still on the login page)
  await expect(page).toHaveURL(/.*practice-test-login/);
});
