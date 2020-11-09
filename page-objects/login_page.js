var LoginPage=function(){}

LoginPage.prototype = Object.create({}, {
    loginTitleTxt: {get:function(){return element(by.id('lblTitle'))}}, //Update
    userFldLbl: {get:function(){return element(by.id('lblUser'))}}, 
    userFld: {get:function(){return element(by.id('UserName'))}}, 
    passwordFldLbl: {get:function(){return element(by.id('lblPassword'))}}, 
    passwordFld: {get:function(){return element(by.id('PasswordTextBox'))}},
    
    submitBtn: {get:function(){return element(by.id('LoginButton'))}},
    loginUserErrorMsg: {get:function(){return element(by.id('UserNameRequired'))}},
    loginPasswordErrorMsg: {get:function(){return element(by.id('PasswordRequired'))}},
    siteUrl:{get:function(){return "http://63.32.2.177/XMPieDashboard"}},
    usrName:{get:function(){return "Yaki"}},
    password:{get:function(){return "XMB0512.ie"}},
})

module.exports = LoginPage