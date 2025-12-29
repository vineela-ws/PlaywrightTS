import { test, expect } from '@playwright/test'

test('Playwright TypeScript Test', async ({ page }) => {
      //await page.goto('https://github.com/vineela-ws/');

      //GetByRole
      //await page.getByRole('link', { name: 'Sign in' }).click();

      //GetByLabel 
      //await page.getByLabel('Homepage',{ exact:true }).first().click();

      //GetByAltText
      //await page.getByAltText("View vineela-ws's full-sized avatar").click();


      //GetByTestId
      //await page.getByTestId("repositories").first().click();

      //GetByText
      //await page.getByText("Sign up").click();

      //GetByPlaceHolder, XPath, CSS Selector
      //await page.goto('https://www.youtube.com/@testerstalk');

      //await page.getByPlaceholder('Search').fill("testers talk")

      //XPath
      //await page.locator('//*[@role = "combobox"]').fill('testers talk');

      //CSS
      //await page.locator('input[role = "combobox"]').fill('testers talk');

      await page.goto('https://www.google.com');

      //GetByTitle
      await page.getByTitle('Search').fill('PlayWright by testers talk')



})


