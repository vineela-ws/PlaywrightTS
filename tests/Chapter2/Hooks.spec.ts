import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Running before all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('Running before each test');
  await page.goto('https://www.google.com/');
});

test.afterEach(async () => {
  console.log('Running after each test');
});

test.afterAll(async () => {
  console.log('Running after all tests');
});

test('basic test example', async ({ page }) => {
  await expect(page).toHaveTitle(/Google/);
});