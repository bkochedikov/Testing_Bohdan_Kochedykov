class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async goToUrl(url) {
    await this.driver.get(url);
  }

  async getURL() {
    return await this.driver.getCurrentUrl();
  }
}

module.exports = BasePage;
