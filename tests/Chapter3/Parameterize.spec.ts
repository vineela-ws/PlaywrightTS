import { test, expect } from '@playwright/test'

const searchKeywords = ['Playwright by testers talk','Cypress by testers talk','API Testing by testers talk']

for(const searchKeyword of searchKeywords) {

  test(`Parameterize Playwright TypeScript Test - ${searchKeyword}`, async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByLabel('Search',{exact:true}).fill(searchKeyword);
      await page.getByLabel('Search',{exact:true}).press('Enter');
      await page.getByRole('link', { name: searchKeyword }).first().click();
      await expect(page.getByText(searchKeyword+'✅').nth(2)).toBeVisible();
    })

}