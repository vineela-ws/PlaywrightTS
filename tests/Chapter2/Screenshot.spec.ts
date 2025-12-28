import { test, expect } from '@playwright/test'

test('Capture screenshot in Playwright Test', async ({ page }) => {
      await page.goto('https://www.youtube.com/@testerstalk');

      //Element Screenshot
      await page.locator('#page-header-container').screenshot({path : './Screenshots/ElementScreenshot.png'})

      //Page Screenshot
      await page.screenshot({path : './Screenshots/PageScreenshot.png'})

      //Full Page Screenshot
      await page.screenshot({path : './Screenshots/PageScreenshot2.png', fullPage:true})

})
