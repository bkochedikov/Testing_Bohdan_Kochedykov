const { Builder } = require("selenium-webdriver");
const BasePage = require("../pageObjects/basePage");
var expect = require("chai").expect;
const LoginPage = require("../pageObjects/loginPage");
const AddPage = require("../pageObjects/addPage");
const HomePage = require("../pageObjects/homePage");
require("chromedriver");

describe("Create and delete user", function () {
  let driver;
  let basePage;
  let loginPage;
  let addPage;
  let homePage;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    basePage = new BasePage(driver);
  });

  it("Open main Page", async () => {
    const baseurl =
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    await basePage.goToUrl(baseurl);
  }).timeout(10000);

  it("Login", async () => {
    const username = "Admin";
    const password = "admin123";
    loginPage = new LoginPage(driver);
    await loginPage.login(username, password);
    let check = await loginPage.ifLogged();
    expect(check);
  }).timeout(10000);

  it("Go to add page", async () => {
    homePage = new HomePage(driver);
    await homePage.goToAdd();
    expect(await homePage.getURL()).to.equal(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
    );
  }).timeout(10000);

  it("Add User", async () => {
    addPage = new AddPage(driver);
    let checkAdded = await addPage.addUser(
      "Odis  Adalwi",
      "test12315",
      "admin123H^"
    );
    expect(checkAdded);
  }).timeout(15000);

  it("Delete User", async () => {
    await homePage.reset();
    let checkRemoved = await homePage.remove(
      "Odis  Adalwi",
      "test12315"
    );
    expect(checkRemoved);
  }).timeout(15000);

  after(async () => {
    setTimeout(() => {
      driver.quit();
    }, 8000);
  });
});
