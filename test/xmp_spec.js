

//page objects
var XmpPage = require("../page-objects/xmp_page");
var LoginPage = require("../page-objects/login_page"); //update to your page object
//required for geting element text and writing to file
var fs = require('fs');
var EC = protractor.ExpectedConditions;
const writeValueToFile = (value) => {
    return fs.appendFile('Id.txt', value + '\n', function (err) {
        if (err) return console.log(err);       
    });
}

describe('', function () {
    var xmpPage, loginPage;

    beforeEach(function () {
        loginPage = new LoginPage();
        xmpPage = new XmpPage();
        //Since this isn't Angular
        browser.ignoreSynchronization = true;
        //open URL
        browser.get(loginPage.siteUrl);
        //Update to your url, this usrl is a relative path to the index.html file
        //need to clear field, consecutive tests leave username in input which cause username to become: "UserNameUserName"
        loginPage.userFld.clear()
        loginPage.userFld.sendKeys(loginPage.usrName)
        loginPage.passwordFld.sendKeys(loginPage.password)
        loginPage.submitBtn.click()

    });
    afterEach(function () {
        xmpPage.logoutLink.click()
        let alertLogoutPop = browser.switchTo().alert();
        if (alertLogoutPop != undefined) {
            alertLogoutPop.accept()
        }
    });
    it("should display all elements for the page", function () {
        expect(xmpPage.headerTitle.isDisplayed()).toBe(true);
        expect(xmpPage.headerTitle.getText()).toEqual("Accounts");

        expect(xmpPage.accountsTitle.isDisplayed()).toBe(true);
        expect(xmpPage.accountsTitle.getText()).toEqual("Accounts");

        expect(xmpPage.newBtn.isDisplayed()).toBe(true);
        expect(xmpPage.deleteBtn.isDisplayed()).toBe(true);

        expect(xmpPage.logoutLink.isDisplayed()).toBe(true);

    });
    it("should display all elements for new account", function () {
        //var lastRowId = xmpPage.lastRowId.getText()
        xmpPage.newBtn.click()

        expect(xmpPage.newAccLbl.isDisplayed()).toBe(true);
        expect(xmpPage.newAccLbl.getText()).toEqual("New Account");

        expect(xmpPage.cancelNewBtn.isDisplayed()).toBe(true);
        expect(xmpPage.saveNewBtn.isDisplayed()).toBe(true);

        expect(xmpPage.nameFldLbl.isDisplayed()).toBe(true);
        expect(xmpPage.nameFldLbl.getText()).toEqual("Name:*");
        expect(xmpPage.nameFld.isDisplayed()).toBe(true);

        expect(xmpPage.commentsFldLbl.isDisplayed()).toBe(true);
        expect(xmpPage.commentsFldLbl.getText()).toEqual("Comments:");
        expect(xmpPage.commentsFld.isDisplayed()).toBe(true);

    });
    it("should check that the cancel button works", function () {
        xmpPage.newBtn.click()

        expect(xmpPage.newAccLbl.isDisplayed()).toBe(true);
        expect(xmpPage.newAccLbl.getText()).toEqual("New Account");

        expect(xmpPage.cancelNewBtn.isDisplayed()).toBe(true);
        expect(xmpPage.saveNewBtn.isDisplayed()).toBe(true);

        expect(xmpPage.nameFldLbl.isDisplayed()).toBe(true);
        expect(xmpPage.nameFldLbl.getText()).toEqual("Name:*");
        expect(xmpPage.nameFld.isDisplayed()).toBe(true);

        expect(xmpPage.commentsFldLbl.isDisplayed()).toBe(true);
        expect(xmpPage.commentsFldLbl.getText()).toEqual("Comments:");
        expect(xmpPage.commentsFld.isDisplayed()).toBe(true);

        xmpPage.cancelNewBtn.click()

        expect(xmpPage.accountsTitle.isDisplayed()).toBe(true);
        expect(xmpPage.accountsTitle.getText()).toEqual("Accounts");

        expect(xmpPage.newBtn.isDisplayed()).toBe(true);
        expect(xmpPage.deleteBtn.isDisplayed()).toBe(true);

        expect(xmpPage.logoutLink.isDisplayed()).toBe(true);
    });
    it("should create and delete new account (and add id to file)", function () {
        //must make sure table is in order of Ascending Id in order to get the last id
        xmpPage.tableIdAsc.click();
        expect(xmpPage.tableIdAscImg.getAttribute('src')).toEqual(loginPage.siteUrl + xmpPage.tableIdAscImgExpected)
        var originalLastRowId = xmpPage.lastRowId.getText()
        xmpPage.newBtn.click()
        xmpPage.nameFld.sendKeys("Protractor_Test")
        xmpPage.commentsFld.sendKeys("New Account made with protractor, immediate deletion")
        xmpPage.saveNewBtn.click()
        xmpPage.tableIdAsc.click();

        expect(xmpPage.tableIdAscImg.getAttribute('src')).toEqual(loginPage.siteUrl + xmpPage.tableIdAscImgExpected)
        expect(xmpPage.lastRowId.getText()).not.toEqual(originalLastRowId)


        //because getText() returns promise, use browser.wait to resolve promise and send text to function that will write to file
        browser.wait(EC.elementToBeClickable(xmpPage.lastRowId), 20000)
            .then(() => {
                return xmpPage.lastRowId.getText()
                    .then((text) => {
                        return text;
                    })
                    .then(writeValueToFile);
            });


        xmpPage.lastRowChkBox.click()
        xmpPage.deleteBtn.click()
        let alertDeletePop = browser.switchTo().alert();
        if (alertDeletePop != undefined) {
            alertDeletePop.accept()
        }
        expect(xmpPage.lastRowId.getText()).toEqual(originalLastRowId)
    });

})