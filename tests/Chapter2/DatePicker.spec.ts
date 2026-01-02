import { test, expect } from '@playwright/test'

test('Selecting Date Test', async ({ page }) => {
      await page.goto('https://jqueryui.com/datepicker/');

      //HardCoded Date
      const iframe = page.frameLocator('[class ="demo-frame"]');
      //await iframe.locator('[id = "datepicker"]').fill('01/01/2026');

      //Selecting Dynamic Date
      //await iframe.locator('[id = "datepicker"]').click();
      //await iframe.locator('.ui-datepicker-today').click();

      //Selecting Past Date
      // await iframe.locator('[id="datepicker"]').click();
      // await iframe.locator('[title="Prev"]').click();  
      // await iframe.locator('text="15"').click();  

      //Selecting Past Date
      await iframe.locator('[id="datepicker"]').click();
      await iframe.locator('[title="Next"]').click();  
      await iframe.locator('text="15"').click(); 

})


