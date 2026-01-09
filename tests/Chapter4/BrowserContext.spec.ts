import { test, expect } from '@playwright/test'

test('Multiple Browsers/Tabs in Playwright TypeScript Test', async ({ page, browser }) => {
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();

    await expect(page).toHaveTitle('Playwright by testers talk - YouTube');


    //New Browser Session
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://www.google.com/');
    await page2.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page2.getByLabel('Search', { exact: true }).press('Enter');
    await page2.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    await expect(page2.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();

    await expect(page2).toHaveTitle('Playwright by testers talk - YouTube');

    //Create a New Tabs
    const newTab = await context2.newPage();

    await newTab.goto('https://www.google.com/');
    await newTab.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await newTab.getByLabel('Search', { exact: true }).press('Enter');

})


