import { test, expect } from "@playwright/test";
import loginPageLocator from "../pages-locator/login_page_locator.js";
import eventPageLocator from "../pages-locator/events_page_locator.js";
//import 'dotenv/config'


test("Login page redirect and search", async ({ page }) => {
  //await page.goto(process.env.loginURL);
  const loginPageLocate = new loginPageLocator(page);
  const eventsSearch = new eventPageLocator(page);
  await page.goto(process.env.LOGIN_URL);
  console.log(await page.title());
  await loginIntoPortal(
    loginPageLocate.usernameSelector,
    loginPageLocate.passwordSelector,
    loginPageLocate.loginButtonSelector,
    loginPageLocate.homeButtonSelector,
  ); //This was an issue, the function was async and I was not adding await when calling the function

  await eventNavigation(eventsSearch.eventTextButtonSelector, eventsSearch.eventSearchBar, eventsSearch.bookNowButton);

  await page.waitForTimeout(3000); //This is added to view the action visually
});

async function loginIntoPortal(
  usernameSelector,
  passwordSelector,
  loginButtonSelector,
  homeButtonSelector,
) {
  //Fill username and password and try to login into the application

  await expect(usernameSelector).toBeEditable();
  await usernameSelector.fill(process.env.LOGIN_USERNAME);

  await expect(passwordSelector).toBeEditable();
  await passwordSelector.fill(process.env.LOGIN_PASSWORD);

  await expect(loginButtonSelector).toBeEnabled();
  await loginButtonSelector.click();

  //adding visibility of home page
  await expect(homeButtonSelector).toBeVisible();
}

async function eventNavigation(eventTextButtonSelector, eventSearchBar, bookNowButton) {
  // Moving to event section and search for particular event and click on the book button
  await expect(eventTextButtonSelector).toBeEnabled();
  await eventTextButtonSelector.click();

  await expect(eventSearchBar).toBeEditable();
  await eventSearchBar.fill("Diwali");

  await expect(bookNowButton).toBeEnabled();
  await bookNowButton.click();
}
