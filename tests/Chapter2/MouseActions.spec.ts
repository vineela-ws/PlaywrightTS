import { test, expect } from '@playwright/test'

test('Mouse hover actions', async ({ page }) => {
      await page.goto('https://www.google.com/search?q=playwright+testers+talk');

      //Left button click
      //await page.getByRole('link',{name:'Playwright by Testers Talk ✅'}).click({button:'left'})

      //Middle button click
      //await page.getByRole('link',{name:'Playwright by Testers Talk ✅'}).click({button:'middle'})

      //Right button click
      //await page.getByRole('link',{name:'Playwright by Testers Talk ✅'}).click({button:'right'})

      //Mouse Over
      //await page.getByLabel('Search by voice').hover();

      //Double Click
      await page.getByLabel('Search by voice').dblclick();

})


