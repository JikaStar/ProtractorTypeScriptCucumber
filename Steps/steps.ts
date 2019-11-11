import {Given,When,Then} from "cucumber";
import { async } from "q";
import {calculatorPage} from "../Pages/calculatorPage";
import { browser } from "protractor";
import { angularHomePage } from "../Pages/angularHomePage";
import chai from "chai";
var expect = chai.expect;
let calc=new calculatorPage();
let ah=new angularHomePage();

Given('I will navigate to Calc Site', async(string)=>{
     if(string=="calc")
     {
        await browser.get('http://juliemr.github.io/protractor-demo/');
     }
     else if(string=="angularJs")
     {
        await browser.get("https://angularjs.org/");
     }
});

When('I add two numbers {string} and {string}', async(string, string2)=> {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
});

Then('the output displayed should be {string}', async(string)=> {
    await calc.go.click();
    await calc.getResult.getText().then(function(text){
        expect(text).to.equal(string);
    });
    When('I clicked on header link', async()=> {
        await ah.angularLink.click();
    });
    When('you will navigate to angular page', async()=> {
       console.log("navigated to new page");
    });
    Then('you will enter{string} in search box', async(string)=> {
        browser.sleep(3000);
        await ah.search.sendKeys("hello");
    })
});
