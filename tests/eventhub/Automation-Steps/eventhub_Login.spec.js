import { test, expect } from "@playwright/test";
import loginPageLocator from "../pages-locator/login_page_locator.js";
//import 'dotenv/config'


test("Login page redirect", async ({ page }) => {
  //await page.goto(process.env.loginURL);
  const loginPageLocate = new loginPageLocator(page);
  await page.goto(process.env.LOGIN_URL);
  console.log(await page.title());
  await loginIntoPortal(
    loginPageLocate.usernameSelector,
    loginPageLocate.passwordSelector,
    loginPageLocate.loginButtonSelector,
    loginPageLocate.homeButtonSelector,
  ); //This was an issue, the function was async and I was not adding await when calling the function
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
