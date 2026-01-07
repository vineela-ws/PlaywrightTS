import { test, expect } from '@playwright/test'

test('Timeouts in Playwright', async ({ page }) => {

      test.setTimeout(1 * 60 * 1000)
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();

      await page.waitForTimeout(60000);
})