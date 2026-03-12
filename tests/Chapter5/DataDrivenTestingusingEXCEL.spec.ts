import { test, expect } from '@playwright/test'

import path from 'path';

import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname,'../../test-data/qa/Test-Data.xlsx');

type TestRecords = {
  skill1: string
  skill2: string
}

for (const record of records) {

  test(`Data driven testing using CSV in Playwright : ${record.skill1}`, async ({ page }) => {

    await page.goto('https://www.google.com/')

    await page.getByLabel('Search', { exact: true }).fill(record.skill1)

    await page.getByLabel('Search', { exact: true }).press('Enter')

    await page.getByRole('link', { name: record.skill1 }).first().click()

    // Validate webpage title
    await expect(page).toHaveTitle(`${record.skill1} - YouTube`)

  })

}