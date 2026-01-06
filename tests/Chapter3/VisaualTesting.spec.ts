import { test, expect } from '@playwright/test'

test('Visual Comparision in Playwright', async ({ page }) => {
      await page.goto('https://github.com/login');

      await expect(page).toHaveScreenshot('GithubLoginPage.png');
})