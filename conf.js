exports.config={
    framework:'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities:
    
{
        browserName:'chrome'
    },
    specs:[

        './test/login_spec.js',
        './test/xmp_spec.js'
    ],
    jasmineNodeOpts:{
        showColors:true
    },


    onPrepare: function() {

        // By default, Protractor use data:text/html,<html></html> as resetUrl, but 
        // location.replace from the data: to the file: protocol is not allowed
        // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
        // with the file: protocol (this particular one will open system's root folder)


        // browser.resetUrl = 'file://';
    }

}