// Test for login page
//Page Object file
var XmpPage = require("../page-objects/xmp_page"); //need the logout button for when we test login
var LoginPage = require("../page-objects/login_page"); //update to your page object
describe("Login Page Tests", function () {
  var xmpPage, loginPage;

  beforeEach(function () {

    loginPage = new LoginPage();
    //Since this isn't Angular
    browser.ignoreSynchronization = true;
    //open URL
    browser.get(loginPage.siteUrl);
  });

  afterEach(function () {

  });
  it("should display all the important login page elements", function () {
    expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true);
    expect(loginPage.loginTitleTxt.getText()).toEqual(
      "uProduce Dashboard"
    );

    expect(loginPage.userFldLbl.isDisplayed()).toBe(true);
    expect(loginPage.userFld.isDisplayed()).toBe(true);
    expect(loginPage.userFld.getText()).toEqual("");

    expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true);
    expect(loginPage.passwordFld.isDisplayed()).toBe(true);
    expect(loginPage.passwordFld.getText()).toEqual("");

    expect(loginPage.submitBtn.isDisplayed()).toBe(true);
  });
  it("should display error message when no username or password entered", function () {
    //make sure username feild is clear
    loginPage.userFld.clear()
    loginPage.submitBtn.click();
    expect(loginPage.loginUserErrorMsg.isDisplayed()).toBe(true);
    expect(loginPage.loginUserErrorMsg.getText()).toEqual(
      "*"
    );
    expect(loginPage.loginPasswordErrorMsg.isDisplayed()).toBe(true);
    expect(loginPage.loginPasswordErrorMsg.getText()).toEqual(
      "*"
    );

  });

  it("should display error message when no password entered", function () {
    //make sure username feild is clear
    loginPage.userFld.clear()
    loginPage.userFld.sendKeys(loginPage.usrName)
    loginPage.submitBtn.click();
    expect(loginPage.loginPasswordErrorMsg.isDisplayed()).toBe(true);
    expect(loginPage.loginPasswordErrorMsg.getText()).toEqual(
      "*"
    );
  });
  it("should display error message when no email entered", function () {
    //make sure username feild is clear
    loginPage.userFld.clear()
    loginPage.passwordFld.sendKeys(loginPage.password)
    loginPage.submitBtn.click();
    expect(loginPage.loginUserErrorMsg.isDisplayed()).toBe(true);
    expect(loginPage.loginUserErrorMsg.getText()).toEqual(
      "*"
    );
  });

  it("should log user in", function () {
    //make sure username feild is clear
    xmpPage = new XmpPage();
    loginPage.userFld.clear()
    loginPage.userFld.sendKeys(loginPage.usrName)
    loginPage.passwordFld.sendKeys(loginPage.password)
    loginPage.submitBtn.click();
    expect(browser.getCurrentUrl()).toEqual(loginPage.siteUrl+"/Account/AccountList.aspx?")
    xmpPage.logoutLink.click();
    let alertLogoutPop = browser.switchTo().alert();
    if (alertLogoutPop != undefined) {
        alertLogoutPop.accept()
    }


  });
});
