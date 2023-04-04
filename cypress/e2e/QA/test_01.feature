Feature: No entitlement

    Background:

    Scenario: I want to se no entitlment
        Given I go to url
        Then I navigate calculate entitlements
        Then I select radio buttons
        And I should see an error message