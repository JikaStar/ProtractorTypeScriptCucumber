
import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    
    specs: ['../Features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        tags: "@AngularTesting",
        format:'json:./cucumberreport.json',
        onComplete:()=>{

        },
        require: [
          './Steps/*.ts' // accepts a glob
        ]
      },
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