var XmpPage=function(){}

XmpPage.prototype = Object.create({}, {

    headerTitle: {get:function(){return element(by.id('headerTitle'))}},
    accountsTitle: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_TopBlueDiv1_TitleLabel'))}},
    
    newBtn: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_ListButtons1_NewButton'))}},
    deleteBtn: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_ListButtons1_DeleteButton'))}},
    
    lastrow:{get:function(){return element(by.css('#ctl00_MainContentPlaceHolder_AccountGridView > tbody > tr:nth-last-child(1)'))}},

    tableIdAsc:{get:function(){return element(by.id('ctl00_MainContentPlaceHolder_AccountGridView_ctl01_Linkbutton2'))}},
    tableIdAscImg:{get:function(){return element(by.id('ctl00_MainContentPlaceHolder_AccountGridView_ctl01_Imagebutton2'))}},
    tableIdAscImgExpected:{get:function(){return "/Images/sortAsc.gif"}},


    lastRowChkBox: {get:function(){return element(by.css('#ctl00_MainContentPlaceHolder_AccountGridView > tbody > tr:nth-last-child(1) > td:nth-child(1) > input[type=checkbox]'))}},
    lastRowName: {get:function(){return element(by.css('#ctl00_MainContentPlaceHolder_AccountGridView > tbody > tr:nth-last-child(1) > td:nth-child(1) > a'))}},
    lastRowId: {get:function(){return element(by.css('#ctl00_MainContentPlaceHolder_AccountGridView > tbody > tr:nth-last-child(1) > td:nth-child(2) > span'))}},    
    lastRowDesc: {get:function(){return element(by.css('#ctl00_MainContentPlaceHolder_AccountGridView > tbody > tr:nth-child(3) > td:nth-child(5) > span'))}},
    
    

    cancelNewBtn: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_EditButtons1_CancelButton'))}},
    saveNewBtn: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_EditButtons1_SaveButton'))}},
    newAccLbl: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_AccountTopBlueDiv_TitleLabel'))}},
    
    nameFldLbl: {get:function(){return element(by.css('#ctl00_MainContentPlaceHolder_AccountDetailsView > tbody > tr:nth-child(1) > td.DetailsViewHeader'))}},
    nameFld: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_AccountDetailsView_Name'))}},
    
    commentsFldLbl: {get:function(){return element(by.css('#ctl00_MainContentPlaceHolder_AccountDetailsView > tbody > tr:nth-child(2) > td.DetailsViewHeader'))}},
    commentsFld: {get:function(){return element(by.id('ctl00_MainContentPlaceHolder_AccountDetailsView_Comments'))}},




    logoutLink: {get:function(){return element(by.id('ctl00_DashboardHeader_HyperlinkLogout'))}}

})

module.exports = XmpPage