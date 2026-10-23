class loginPageLocator {
  constructor(page) {
    this.page = page;

    this.usernameSelector = page.locator("//*[@id='email']");
    this.passwordSelector = page.locator("//*[@id='password']");
    this.loginButtonSelector = page.locator("//*[@id='login-btn']");
    this.homeButtonSelector = page.locator("//*[@id='nav-home']");

  }
}

//module.exports = loginPageLocator; //This is the old style used in "CommonJS" for sharing filed between modules
export default loginPageLocator; //This is the new style used in ES Modules / ESM (The Modern Standard) for sharing filed between modules
