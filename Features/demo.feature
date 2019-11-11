Feature: I am going to validate Calculator App

  @calculatortesting
  Scenario: Calculator Add functionality testing

  Given I will navigate to "Calc" Site
  When I add two numbers "3" and "5"
  Then the output displayed should be "8"


  @calculatortesting
  Scenario: Calculator Add functionality testing 2

  Given I will navigate to "Calc" page
  When I add two numbers "7" and "3"
  Then the output displayed should be "10"

  @AngularTesting
  Scenario Outline: Angular validations

  Given I will navigate to "AngularJs" page
  When I clicked on header link
  And you will navigate to angular page
  Then you will enter <hello> in search box

  Examples:
  | key   | 
  | hello | 
  | hey   |


