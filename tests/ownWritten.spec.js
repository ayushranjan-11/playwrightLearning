//const { test } = require('@playwright/test');
import {test} from '@playwright'

test('Trial', async ({ browser, page }) =>
{
  // const context = await browser.newContext();

  // const page = await context.newPage();
  await page.goto("https://www.zed.dev")
});
