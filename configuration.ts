//let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
//var HtmlReporter = require('protractor-beautiful-reporter');
import {Config} from "protractor";

export let config: Config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    specs: ['testspec.js'],
    // suites:{
    //      smoke:['../Tests/BankManagerSimple.spec.js','../Tests/demo.spec.js'],
    //      regression:['../Tests/*.spec.js']

    // },



    capabilities:{
      'browserName': 'chrome'
    },
    onPrepare: function(){
      //browser.manage().timeouts().implicitlyWait(12000);
     // browser.waitForAngularEnabled(false);
      //browser.manage().window().maximize();
    //   jasmine.getEnv().addReporter(new SpecReporter({
    //     displayFailuresSummary: true,
    //     displayFailureSpec: true,
    //     displaySuiteNumber: true,
    //     displaySpecDuration: true,
    //     showstack: false



      //}));

      //Add a screenshot reporter and store screenshots to '/tmp/screenshots';
//       jasmine.getEnv().addReporter(new HtmlReporter({
//         baseDirectory: '../report/screenshots',
//         preserveDirectory: false,
//         screenshotsSubfolder: 'images',
//         jsonsSubfolder: 'jsons',
//         docName: 'Report.html'

//       }).getJasmine2Reporter());
    }
   };