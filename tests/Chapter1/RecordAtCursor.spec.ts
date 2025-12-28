import { test, expect } from '@playwright/test'

test('RecordAtCursor Test', async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
      await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
      await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
})