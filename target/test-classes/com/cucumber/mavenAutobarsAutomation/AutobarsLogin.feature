Feature: Tests Successful and failed login conditions

  Scenario Outline: Test SUCCESSFUL login functionality using VALID credentials
    Given User is on page : http://alpha.autobars-voa-gov.uk
    And I enter a <username>
    And I enter <password>
    And User clicks Signin
    Then Message displayed is : <msg>
    When user signsout from the autobars application
    And close the browser

    Examples: 
      | username    | password       | msg                                      |
      | "ealing"    | "japanesenods" | Welcome Ealing Council                   |
      | "hshire"    | "japanesenods" | Welcome Huntingdonshire District Council |
      | "redbridge" | "japanesenods" | Welcome Redbridge                        |

  Scenario Outline: Test FAILED login functionality using INVALID credentials
    Given User is on page : http://alpha.autobars-voa-gov.uk
    And I enter a <username>
    And I enter <password>
    And User clicks Signin
    Then Error message displayed is : <errormsg>
    And close the browser

    Examples: 
      | username    | password       | errormsg                                                                              |
      | "ealing"    | "japanesenod"  | Your username or password have not been recognised. Please verify them and try again. |
      | "hshir"     | "japanesenods" | Your username or password have not been recognised. Please verify them and try again. |
      | "redbridge" | "japaneseno"   | Your username or password have not been recognised. Please verify them and try again. |
