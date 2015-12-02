$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\cucumber\\mavenAutobarsAutomation\\AutobarsLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Tests Successful and failed login conditions",
  "description": "",
  "id": "tests-successful-and-failed-login-conditions",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 14,
  "name": "Test SUCCESSFUL login functionality using VALID credentials",
  "description": "",
  "id": "tests-successful-and-failed-login-conditions;test-successful-login-functionality-using-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on page : http://alpha.autobars-voa-gov.uk",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a \"ealing\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"japanesenods\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed is : Welcome Ealing Council",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user signsout from the autobars application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://alpha.autobars-voa-gov.uk",
      "offset": 18
    }
  ],
  "location": "Autobars_Login_LogoutTest.go_to_autobar(String)"
});
formatter.result({
  "duration": 18160206132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ealing",
      "offset": 11
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter_a(String)"
});
formatter.result({
  "duration": 234848571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "japanesenods",
      "offset": 9
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter(String)"
});
formatter.result({
  "duration": 690158898,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_clicks_Signin()"
});
formatter.result({
  "duration": 2169500658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome Ealing Council",
      "offset": 23
    }
  ],
  "location": "Autobars_Login_LogoutTest.verify_welcome_message(String)"
});
formatter.result({
  "duration": 57652746,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_signsout_from_the_autobars_application()"
});
formatter.result({
  "duration": 1824702878,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.close_the_browser()"
});
formatter.result({
  "duration": 33377275,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test SUCCESSFUL login functionality using VALID credentials",
  "description": "",
  "id": "tests-successful-and-failed-login-conditions;test-successful-login-functionality-using-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on page : http://alpha.autobars-voa-gov.uk",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a \"hshire\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"japanesenods\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed is : Welcome Huntingdonshire District Council",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user signsout from the autobars application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://alpha.autobars-voa-gov.uk",
      "offset": 18
    }
  ],
  "location": "Autobars_Login_LogoutTest.go_to_autobar(String)"
});
formatter.result({
  "duration": 10951492392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hshire",
      "offset": 11
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter_a(String)"
});
formatter.result({
  "duration": 215860963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "japanesenods",
      "offset": 9
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter(String)"
});
formatter.result({
  "duration": 683219791,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_clicks_Signin()"
});
formatter.result({
  "duration": 2661778122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome Huntingdonshire District Council",
      "offset": 23
    }
  ],
  "location": "Autobars_Login_LogoutTest.verify_welcome_message(String)"
});
formatter.result({
  "duration": 399276896,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_signsout_from_the_autobars_application()"
});
formatter.result({
  "duration": 1442710460,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.close_the_browser()"
});
formatter.result({
  "duration": 556839667,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test SUCCESSFUL login functionality using VALID credentials",
  "description": "",
  "id": "tests-successful-and-failed-login-conditions;test-successful-login-functionality-using-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on page : http://alpha.autobars-voa-gov.uk",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a \"redbridge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter \"japanesenods\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed is : Welcome Redbridge",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user signsout from the autobars application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://alpha.autobars-voa-gov.uk",
      "offset": 18
    }
  ],
  "location": "Autobars_Login_LogoutTest.go_to_autobar(String)"
});
formatter.result({
  "duration": 12772295231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "redbridge",
      "offset": 11
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter_a(String)"
});
formatter.result({
  "duration": 780650668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "japanesenods",
      "offset": 9
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter(String)"
});
formatter.result({
  "duration": 176720294,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_clicks_Signin()"
});
formatter.result({
  "duration": 2532978719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome Redbridge",
      "offset": 23
    }
  ],
  "location": "Autobars_Login_LogoutTest.verify_welcome_message(String)"
});
formatter.result({
  "duration": 406061483,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_signsout_from_the_autobars_application()"
});
formatter.result({
  "duration": 1541213278,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.close_the_browser()"
});
formatter.result({
  "duration": 292642722,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Test FAILED login functionality using INVALID credentials",
  "description": "",
  "id": "tests-successful-and-failed-login-conditions;test-failed-login-functionality-using-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on page : http://alpha.autobars-voa-gov.uk",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter a \"ealing\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"japanesenod\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks Signin",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Error message displayed is : Your username or password have not been recognised. Please verify them and try again.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://alpha.autobars-voa-gov.uk",
      "offset": 18
    }
  ],
  "location": "Autobars_Login_LogoutTest.go_to_autobar(String)"
});
formatter.result({
  "duration": 14459858094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ealing",
      "offset": 11
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter_a(String)"
});
formatter.result({
  "duration": 247141681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "japanesenod",
      "offset": 9
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter(String)"
});
formatter.result({
  "duration": 628634050,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_clicks_Signin()"
});
formatter.result({
  "duration": 2632097903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username or password have not been recognised. Please verify them and try again.",
      "offset": 29
    }
  ],
  "location": "Autobars_Login_LogoutTest.VerifyErrorMsg(String)"
});
formatter.result({
  "duration": 375510597,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.close_the_browser()"
});
formatter.result({
  "duration": 24020029,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Test FAILED login functionality using INVALID credentials",
  "description": "",
  "id": "tests-successful-and-failed-login-conditions;test-failed-login-functionality-using-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on page : http://alpha.autobars-voa-gov.uk",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter a \"hshir\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"japanesenods\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks Signin",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Error message displayed is : Your username or password have not been recognised. Please verify them and try again.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://alpha.autobars-voa-gov.uk",
      "offset": 18
    }
  ],
  "location": "Autobars_Login_LogoutTest.go_to_autobar(String)"
});
formatter.result({
  "duration": 12356170046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hshir",
      "offset": 11
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter_a(String)"
});
formatter.result({
  "duration": 242097286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "japanesenods",
      "offset": 9
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter(String)"
});
formatter.result({
  "duration": 1355703638,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_clicks_Signin()"
});
formatter.result({
  "duration": 1851609736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username or password have not been recognised. Please verify them and try again.",
      "offset": 29
    }
  ],
  "location": "Autobars_Login_LogoutTest.VerifyErrorMsg(String)"
});
formatter.result({
  "duration": 493176070,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.close_the_browser()"
});
formatter.result({
  "duration": 26570450,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Test FAILED login functionality using INVALID credentials",
  "description": "",
  "id": "tests-successful-and-failed-login-conditions;test-failed-login-functionality-using-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on page : http://alpha.autobars-voa-gov.uk",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter a \"redbridge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"japaneseno\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks Signin",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Error message displayed is : Your username or password have not been recognised. Please verify them and try again.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://alpha.autobars-voa-gov.uk",
      "offset": 18
    }
  ],
  "location": "Autobars_Login_LogoutTest.go_to_autobar(String)"
});
formatter.result({
  "duration": 10460018314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "redbridge",
      "offset": 11
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter_a(String)"
});
formatter.result({
  "duration": 186148243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "japaneseno",
      "offset": 9
    }
  ],
  "location": "Autobars_Login_LogoutTest.i_enter(String)"
});
formatter.result({
  "duration": 637055059,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.user_clicks_Signin()"
});
formatter.result({
  "duration": 2646672308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username or password have not been recognised. Please verify them and try again.",
      "offset": 29
    }
  ],
  "location": "Autobars_Login_LogoutTest.VerifyErrorMsg(String)"
});
formatter.result({
  "duration": 54680960,
  "status": "passed"
});
formatter.match({
  "location": "Autobars_Login_LogoutTest.close_the_browser()"
});
formatter.result({
  "duration": 29888906,
  "status": "passed"
});
});