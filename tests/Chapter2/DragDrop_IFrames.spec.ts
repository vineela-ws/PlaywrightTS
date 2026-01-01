import { test, expect } from '@playwright/test'

test('Handling DragandDrop and IFrames', async ({ page }) => {
      await page.goto('https://jqueryui.com/droppable/');

      const iframe = page.frameLocator('[class = "demo-frame"]');

      //drag element and drop element
      const dragElement = iframe.locator('[id = "draggable"]');
      const dropElement = iframe.locator('[id = "droppable"]');

      await dragElement.dragTo(dropElement);
    
})


