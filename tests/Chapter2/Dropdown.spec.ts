import { test, expect } from '@playwright/test'

test('Handling Dropdown list', async ({ page }) => {
      await page.goto('https://www.facebook.com/r.php?entry_point=login');

      //Select Dropdown using value
      await page.getByLabel('Month').selectOption('3');

      //Select Dropdown using Visable Text
      await page.getByLabel('Month').selectOption('Aug');

      //Validate all the options
      await expect(page.locator('#month > option')).toHaveText([
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]);
});
     


