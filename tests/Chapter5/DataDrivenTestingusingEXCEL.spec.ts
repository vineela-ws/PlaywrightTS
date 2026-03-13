import { test, expect } from '@playwright/test'

import path from 'path';

import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname,'../../test-data/qa/Test-Data.xlsx');

const records = readExcelFile(filePath);

type TestRecords = {
  skill1: string
  skill2: string
}

for (const record of records) {

  test(`Data driven testing using Excel file in Playwright : ${record.skill2}`, async ({ page }) => {

    await page.goto('https://www.google.com/')

    await page.getByLabel('Search', { exact: true }).fill(record.skill2)

    await page.getByLabel('Search', { exact: true }).press('Enter')

    await page.getByRole('link', { name: record.skill2 }).first().click()

    // Validate webpage title
    await expect(page).toHaveTitle(`${record.skill2} - YouTube`)

  })

}