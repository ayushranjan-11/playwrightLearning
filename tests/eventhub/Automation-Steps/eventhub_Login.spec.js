import { test, expect } from "@playwright/test";
import {
  usernameSelector,
  passwordSelector,
  loginButtonSelector,
  homeButtonSelector,
} from "../login_page_locator.js";

//Page variables

// const loginUsername = "hasday19@gmail.com";
// const loginPassword = "Automation@123";
// let usernameSelector;
// let passwordSelector;
// let loginButtonSelector;
// let homeButtonSelector;

test("Login page redirect", async ({ page }) => {
  const loginURL = process.env.LOGIN_URL;
  // usernameSelector = page.locator("//*[@id='email']");
  // passwordSelector = page.locator("//*[@id='password']");
  // loginButtonSelector = page.locator("//*[@id='login-btn']");
  // homeButtonSelector = page.locator("//*[@id='nav-home']");

  //await page.goto(process.env.loginURL);
  await page.goto(loginURL);
  console.log(await page.title());
  await loginIntoPortal(
    usernameSelector,
    passwordSelector,
    loginButtonSelector,
    homeButtonSelector,
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
