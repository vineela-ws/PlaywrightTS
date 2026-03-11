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

    test(`Data driven tetsing using JSON File in playwright : ${skill.skill1}`, async ({ page }) => {

      await page.goto('https://www.google.com/');

      await page.getByLabel('Search',{exact:true}).fill(skill.skill1);
      await page.getByLabel('Search',{exact:true}).press('Enter');

      await page.getByRole('link', { name:skill.skill1 }).first().click();

      //Validate webpage title
      await expect(page).toHaveTitle(skill.skill1+'-Youtube');
})
}

