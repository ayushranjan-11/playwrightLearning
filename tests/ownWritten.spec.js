//const { test } = require('@playwright/test');
import { expect, test } from "@playwright/test";

//Test with page fixture call
test("Trial", async ({ page }) => {
  // const context = await browser.newContext();

  // const page = await context.newPage();

  //Context and new page functions are generally called or added only when there is need for them,
  // if context and page condition are not required to be added then direct page.goto can be used to navigate to the url
  // And when browser context is not required then, under { } directly page can be called for default provided by the playwright
  await page.goto("https://www.zed.dev");
});

//Test with browser context fixture

test("Navigating page with browser fixture", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.udemy.com/");

  await expect(page).toHaveTitle("udemy");
});


//Now in a test case when there is more than 1 test and the requirement is to run only 1 then
// test.only can be used, Example below:
//Also test.only can be used for multiple test too
test.only('Remove .only past test or else only this test case will run for this file', async ({ page }) => {
  await page.goto("https://www.google.co.in");
  console.log(await page.title())
  await expect(page).toHaveTitle("Google");
  //toHaveTitle is case sensitive, use to check if the tab opening contains the correct page title or not

});
