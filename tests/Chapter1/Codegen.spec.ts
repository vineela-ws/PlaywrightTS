import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('testers ');
  await page.getByRole('button', { name: 'testers talk playwright' }).click();
  await page.getByRole('link', { name: 'Testers Talk @testerstalk•27.' }).click();
  await page.getByRole('link', { name: '#1 Playwright Automation' }).nth(1).click();
});