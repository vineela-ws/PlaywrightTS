import { test, expect } from '@playwright/test'

test('Assertions Test', async ({ page }) => {
      await page.goto('https://www.youtube.com/');

      //Visable, Editable, Enabled, Empty
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeVisible();
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEditable();
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEnabled();
      await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEmpty();

})