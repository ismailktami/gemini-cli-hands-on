Feature: Basic Playwright Search
  Scenario: Search for Playwright on Google
    Given I navigate to "https://playwright.dev"
    Then the title should contain "Playwright"
