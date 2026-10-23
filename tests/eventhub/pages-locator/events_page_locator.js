class eventPageLocator {
  constructor(page) {
    this.page = page;

    this.eventTextButtonSelector = page.locator("#nav-events");
    this.eventSearchBar = page.locator("input.w-full");
    this.bookNowButton = page.locator("(//a[@id='book-now-btn'])[last()]");
  }
}

export default eventPageLocator;
