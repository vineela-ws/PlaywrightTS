import { test, expect } from '@playwright/test'

//Write Test 

test('Iterating matching elements Playwright TypeScript Test', async ({ page }) => {
      
      await page.goto('https://github.com/BakkappaN');

      const repositaryLinks = await page.$$('.repo');

      for(const repositaryLink of repositaryLinks){
        const text = await repositaryLink.textContent();
        console.log(`Text from 1st loop: ${text}`)

      }
              console.log("---------------------------------------------------------------------")


      for (let index = 0; index<repositaryLinks.length; index++){
       const text =  await repositaryLinks[index].textContent();
        console.log(`Text from 2nd loop: ${text}`)
      }
   
})