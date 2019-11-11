import {browser} from "protractor";
import {element,by} from "protractor";
import { async } from "q";
import {calculatorPage} from "./Pages/calculatorPage";
import { angularHomePage } from "./Pages/angularHomePage";


describe('Chain Locators',()=> {
  
    it('should open angular  js website', async()=> { 
       let calc=new calculatorPage(); 
       await browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, css identical tags
       await calc.firstEditBox.sendKeys("8");
       await calc.operator.click();
       //await element(by.css("option:nth-child(4)")).click();
       await calc.secondEditBox.sendKeys("9");
       await calc.go.click();
       calc.getResult.getText().then(function(text){
                console.log(text);
       });
       
    });
    it('Angular home page title validation', async()=>
    {
       let ah=new angularHomePage();
       await browser.get("https://angularjs.org/");
       await ah.angularLink.click();
       browser.sleep(3000);
       await ah.search.sendKeys("hello");
    })
});