const { By, until } = require("selenium-webdriver");
const BasePage = require("../pageObjects/basePage");

class AddPage extends BasePage {
  constructor(driver) {
    super(driver);

    this.employeeName = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input'
    );
    this.username = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input'
    );
    this.password = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input'
    );
    this.passwordConfirm = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input'
    );
    this.userRoleBox = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div'
    );
    this.statusBox = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div'
    );
    this.userRole = By.css(".oxd-select-option");
    this.status = By.css(".oxd-select-option");
    this.autocomplete = By.css(".oxd-autocomplete-option");
    this.submit = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]'
    );

    this.addConfirmation = By.css(
      ".oxd-toast.oxd-toast--success.oxd-toast-container--toast"
    );
  }

  async checkAddedUser() {
    try {
      await this.driver.wait(until.elementLocated(this.addConfirmation), 3000);
      return true;
    } catch (e) {
      return false;
    }
  }

  //   username, employeeName, password
  async addUser(employeeName, username, password) {
    await this.driver.wait(until.elementLocated(this.userRoleBox), 3000);
    await this.driver.findElement(this.userRoleBox).click();
    let userRoles = await this.driver.findElements(this.userRole);
    userRoles[2].click();
    await this.driver.findElement(this.statusBox).click();
    let statuses = await this.driver.findElements(this.status);
    statuses[1].click();
    await this.driver.findElement(this.username).sendKeys(username);
    await this.driver.findElement(this.password).sendKeys(password);
    await this.driver.findElement(this.passwordConfirm).sendKeys(password);
    await this.driver.findElement(this.employeeName).sendKeys(employeeName);
    await this.driver.findElement(this.employeeName).click();
    setTimeout(() => {
      this.driver.findElement(this.autocomplete).click();
      this.driver.findElement(this.submit).click();
    }, 2000);

    return await this.checkAddedUser();
  }
}

module.exports = AddPage;
