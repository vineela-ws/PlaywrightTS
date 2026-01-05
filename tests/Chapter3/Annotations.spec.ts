import { test, expect } from '@playwright/test'

test('Test1', async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
})


test.skip('Test2', async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
})

test.only('Test3', async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
})