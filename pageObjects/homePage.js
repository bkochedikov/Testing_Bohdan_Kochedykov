const { By, until } = require("selenium-webdriver");
const BasePage = require("./basePage");

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);

    this.employeeName = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/input'
    );
    this.username = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input'
    );

    this.userRoleBox = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div'
    );
    this.statusBox = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div'
    );

    this.search = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]'
    );

    this.adminBlock = By.xpath(
      '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a'
    );
    this.add = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button'
    );
    this.resetBtn = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[1]'
    );
    this.deleteBtn = By.css(
      ".oxd-table-row.oxd-table-row--with-border > div:nth-child(6) > div > button:nth-child(1)"
    );
    this.deleteConfirm = By.xpath(
      '//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]'
    );
    this.userRole = By.css(".oxd-select-option");
    this.status = By.css(".oxd-select-option");
    this.autocomplete = By.css(".oxd-autocomplete-option");
    this.deleteConfirmationMessage = By.css(
        ".oxd-toast.oxd-toast--success.oxd-toast-container--toast"
    );
  }

  async goToAdd() {
    await this.driver.findElement(this.adminBlock).click();
    await this.driver.wait(until.elementLocated(this.add), 3000).click();
  }

  async reset() {
    await this.driver.wait(until.elementLocated(this.resetBtn), 10000).click();
  }
  async checkSuccessDeleteMessage() {
    try {
      await this.driver.wait(until.elementLocated(this.deleteConfirmationMessage), 3000);
      return true;
    } catch (e) {
      return false;
    }
  }
  async filterUser(employeeName, username){
    await this.driver.wait(until.elementLocated(this.userRoleBox), 3000);
    await this.driver.findElement(this.userRoleBox).click();
    let userRoles = await this.driver.findElements(this.userRole);
    userRoles[2].click();
    await this.driver.findElement(this.statusBox).click();
    let statuses = await this.driver.findElements(this.status);
    statuses[1].click();
    await this.driver.findElement(this.username).sendKeys(username);
    await this.driver.findElement(this.employeeName).sendKeys(employeeName);
    await this.driver.findElement(this.employeeName).click();
    setTimeout(() => {
      this.driver.findElement(this.autocomplete).click();
      this.driver.findElement(this.search).click();
    }, 2000);
  }
  async remove(employeeName, username) {
    await this.filterUser(employeeName, username);
    setTimeout(async () => {
      await this.driver.findElement(this.deleteBtn).click();
      await this.driver.findElement(this.deleteConfirm).click();
    }, 3000);
    return await this.checkSuccessDeleteMessage();
  }
}

module.exports = HomePage;
