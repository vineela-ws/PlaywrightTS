import { test, expect } from '@playwright/test'

test('Playwright TypeScript Test 1', {tag:['@SmokeTesting']}, async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
})

test('Playwright TypeScript Test 2', {tag:['@SmokeTesting','@RegresstionTesting']}, async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
})


test('Playwright TypeScript Test 3',{tag:['@RegresstionTesting']}, async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
      await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
})