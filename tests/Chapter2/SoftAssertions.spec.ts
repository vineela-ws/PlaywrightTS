import { test, expect } from '@playwright/test'

test('Soft Assertions Test', async ({ page }) => {
      await page.goto('https://www.youtube.com/');

      //Visable, Editable, Enabled, Empty
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeVisible();
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEditable();
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEnabled();
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEmpty();

      //Verify URL,title,text,count
      await page.getByPlaceholder('Search', {exact:true}).first().click();
      await page.getByPlaceholder('Search', {exact:true}).first().fill('Playwright by testers talk');
      await page.getByPlaceholder('Search', {exact:true}).first().press('Enter');
      await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+testers+talk');

      await expect.soft(page).toHaveTitle('Playwright typescript by testers talk - YouTube');

})