Feature: Login

Scenario: Successful login with valid credentials

	Given User launch chrome browser
	When User opens URL "http://admin-demo.nopcommerce.com/login"
	And User enters email as "admin@yourstore.com" and password as "admin"
	And Click on login
	Then page Title should be "Dashboard / nopCommerce administration"
	When user click on the logout link 
	Then page Title should be "Your store. Login"
	And close browser

Scenario Outline: Login Data Driven

	Given User launch chrome browser
	When User opens URL "http://admin-demo.nopcommerce.com/login"
	And User enters email as "<email>" and password as "<password>"
	And Click on login
	Then page Title should be "Dashboard / nopCommerce administration"
	When user click on the logout link 
	Then page Title should be "Your store. Login"
	And close browser
	
	Examples:
	
	| email | password |
	| admin@yourstore.com  | admin |
	| admin1@yourstore.com | admin123 |
