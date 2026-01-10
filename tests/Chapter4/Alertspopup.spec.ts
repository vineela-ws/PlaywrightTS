import { test, expect } from '@playwright/test'

test('Handling alerts test', async ({ page }) => {
      await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

      page.once('dialog', dialog =>{
            dialog.accept();
            console.log(`Alert message is : ${dialog.message()}`)
            console.log(`Dialog type is : ${dialog.type()}`)
      })

      await page.getByText('See an example alert', {exact:true}).click();
})

test('Handling popups test1', async ({ page }) => {
      await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

      page.once('dialog', dialog =>{
            dialog.accept();
            console.log(`Popup message is : ${dialog.message()}`)
      })

      await page.getByText('See a sample confirm', {exact:true}).click();
})

test('Handling popups test2', async ({ page }) => {
      await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

      page.once('dialog', dialog =>{
            dialog.dismiss();
            console.log(`Popup message is : ${dialog.message()}`)
      })

      await page.getByText('See a sample confirm', {exact:true}).click();
})

test('Handling prompt popups', async ({ page }) => {
      await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

      page.once('dialog', async(dialog) =>{
            console.log(`Prompt popup message is : ${dialog.message()}`)
            await dialog.accept('Playwright');
      })

      await page.getByText('See a sample prompt', {exact:true}).click();
})


