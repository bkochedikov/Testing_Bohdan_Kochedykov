const { By, until } = require("selenium-webdriver");
const BasePage = require("../pageObjects/basePage");

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.username = By.name("username");
    this.password = By.name("password");
    this.button = By.xpath(
      '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'
    );
  }

  async login(username, password) {
    await this.driver.wait(until.elementLocated(this.username), 3000);
    await this.driver.findElement(this.username).sendKeys(username);
    await this.driver.findElement(this.password).sendKeys(password);
    await this.driver.findElement(this.button).click();
  }

  async ifLogged() {
    let element = await this.driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li')
      ),
      3000
    );

    if (element) return true;

    // return await this.driver.findElement(
    //   By.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li')
    // );
  }
}
module.exports = LoginPage;
