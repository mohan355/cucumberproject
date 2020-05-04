$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.Steps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.Steps.user_click_on_the_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on the logout link",
  "keyword": "When "
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin1@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.Steps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.Steps.user_click_on_the_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.Steps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.Steps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"admin1@yourstore.com\" and password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat StepDefination.Steps.page_Title_should_be(Steps.java:52)\r\n\tat ✽.page Title should be \"Dashboard / nopCommerce administration\"(file:///C:/Users/kafle/Desktop/PNT/SeleniumCucumberPractise/./Features/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on the logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.Steps.user_click_on_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});