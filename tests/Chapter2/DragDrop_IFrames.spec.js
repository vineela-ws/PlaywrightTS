import { test, expect } from '@playwright/test'

test('Handling DragandDrop and IFrames', async ({ page }) => {
      await page.goto('https://jqueryui.com/droppable/');

      //drag element and drop element
      const dragElement = page.locator('[id = "draggable"]');
      const dropElement = page.locator('[id = "droppable"]');

      await dragElement.dragTo(dropElement);
    
})


