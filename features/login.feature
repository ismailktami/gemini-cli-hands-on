Feature: Login to SauceDemo

  Scenario: Successfull login and logout
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should be on the inventory page
    And I logout
    Then I should be on the login page
