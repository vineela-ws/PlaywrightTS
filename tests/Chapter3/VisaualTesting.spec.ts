import { test, expect } from '@playwright/test'

test('Visual Comparision in Playwright', async ({ page }) => {
      await page.goto('https://github.com/login');

      await expect(page).toHaveScreenshot('GithubLoginPage.png');

      await page.locator('#login_field').fill('playwright with typescript');

      await expect(page).toHaveScreenshot('GithubLoginPage.png');

})

test('Element Visual Comparision in Playwright', async ({ page }) => {
      await page.goto('https://github.com/login');

      await expect(page).toHaveScreenshot('GithubLoginPage.png');

      await page.locator('[class="auth-form-body mt-3"]');

      await expect(page).toHaveScreenshot('GithubLoginForm.png');

})