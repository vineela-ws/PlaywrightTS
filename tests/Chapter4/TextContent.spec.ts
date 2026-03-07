import { test, expect } from '@playwright/test'

//Write Test 

test('Get Text & Get Attribute value in Playwright TypeScript Test', async ({ page }) => {
      
      await page.goto('https://github.com/BakkappaN');

      const name = await page.locator('[itemprop="name"]').textContent();
      const finalName = name?.trim();
      console.log(`Name is: ${finalName}`);
      expect(finalName).toBe('Testers Talk');

      //Other way 
      const name1 = await page.locator('[itemprop="name"]').innerText();

      const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
      console.log(`Attribute value is: ${attributeValue}`)
      
})