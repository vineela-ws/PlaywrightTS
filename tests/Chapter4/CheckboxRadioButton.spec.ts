import { test, expect } from '@playwright/test'

//Write Test 

test('Working with Checkbox and Radio Button Playwright TypeScript Test', async ({ page }) => {
    await page.goto('https://jqueryui.com/checkboxradio/');

    const iframe = await page.frameLocator('[class="demo-frame"]');
    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();

    await iframe.locator('[for="radio-1"]').check();

    await expect(iframe.locator('[for="radio-1"]')).toBeChecked();
     
})