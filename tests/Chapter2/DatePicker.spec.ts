import { test, expect } from '@playwright/test'

test('Selecting Date Test', async ({ page }) => {
      await page.goto('https://jqueryui.com/datepicker/');


      //HardCoded Date
      const iframe = page.frameLocator('[class ="demo-frame"]');
      await iframe.locator('[id = "datepicker"]').fill('01/01/2026');

      //Selecting Dynamic Date
      await iframe.locator('[id = "datepicker"]').click();



      
})


