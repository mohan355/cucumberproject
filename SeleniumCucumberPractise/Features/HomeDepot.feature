Feature: Registration

Scenario: Successful login with valid credentials

	Given User launch chrome browser
	When User opens URL "https://homedepot.com"
	Then User click on the myaccount button
	And User click on the Register
	Then User enters email as "kafle678@gmail.com"
	And User enters password as "12345"
	And User enters Zip Code as "21043"
	And User enters phone number as "4439856171"
	And User click on the creat account
	And close browser