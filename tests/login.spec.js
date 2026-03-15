import { test, expect } from '@playwright/test';

test('successful login navigates to dashboard', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/'); // Replace with your login URL

  // Fill in the username and password fields using locators
  await page.locator('input[id="username"]').fill('student');
  await page.locator('input[id="password"]').fill('Password123');

  // Click the submit button
  await page.locator('button[id="submit"]').click();

  // *** Validation Steps ***

  // 1. Assert that the URL has changed to the expected post-login URL
  await expect(page).toHaveURL(/.*logged-in-successfully/);

  // 2. Assert that a specific element on the new page is visible (e.g., a "Log out" button)
  await expect(page.getByText('Log out')).toBeVisible();
  
  // 3. (Optional) Assert a success message is present
  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});