import { test, expect } from '@playwright/test'

test('Playwright TypeScript Test', async ({ page }) => {
      await page.goto('https://github.com/vineela-ws/');

      //GetByRole
      //await page.getByRole('link', { name: 'Sign in' }).click();

      //GetByLabel 
      //await page.getByLabel('Homepage',{ exact:true }).first().click();

      //GetByAltText
      //await page.getByAltText("View vineela-ws's full-sized avatar").click();


      //GetByTestId
      await page.getByTestId("repositories").first().click();

})


