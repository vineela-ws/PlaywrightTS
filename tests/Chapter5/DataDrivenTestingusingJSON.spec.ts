import { test, expect } from '@playwright/test'

import testData from '../../test-data/qa/testdata.json';

type TestData = {
    TestDataSet1:{
        skill1:string,
        skill2:string
    },

    TestDataSet2:{
        skill1:string,
        skill2:string
    }
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {
    const skill = typedTestData[dataSetName as keyof TestData];
}

// test('Data driven tetsing using JSON File Test', async ({ page }) => {
//       await page.goto('https://www.google.com/');
//       await page.getByLabel('Search',{exact:true}).fill('Playwright by testers talk');
//       await page.getByLabel('Search',{exact:true}).press('Enter');

//       await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
//       await expect(page.getByText('Playwright by Testers Talk ✅').nth(2)).toBeVisible();
// })