import { test, expect } from '@playwright/test'

test('Read ENV file config in playwright', async({page}) => {
      await page.goto(`${process.env.GOOGLE_URL}`);
      await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
      await page.getByLabel('Search',{exact:true}).press('Enter');

})