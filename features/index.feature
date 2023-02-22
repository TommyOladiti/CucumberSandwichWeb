Feature: Login Form

  Scenario: Check for a title
    Given the page has loaded
    Then the title should be "Login"

  Scenario: Check for a h2
    Given the page has loaded
    Then the h2 should be "Welcome to Login Page"

  Scenario: Check for a list item
    Given the page has loaded
    Then there should be a list

  Scenario: Check for a button change
    Given the page has loaded
    When a button is clicked
    Then there is a different background color within the page