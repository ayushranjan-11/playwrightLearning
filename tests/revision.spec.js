//This is for writing the learning which was done 

//invoking the test for the playwright

import { test } from '@playwright/test' //This envokes the playwright test capability for this file, also test is a function available in playwright

//Once the playwright test is invoked, now let's see how to use it and open a browser

test('Checking Learning', async ({ page }) => {
  await page.goto("https://www.instagram.com")
});

//Need to know about async await and the arrow function, what they are why to use them and how to use them, also to make progress on the learning journey
// REMEMBER, tutorial won't teach you, hand's on will