Feature: Fabstracta Route
    Scenario: Navigating to a different route
        Given I open the landing page
        When I click on the menu item "Simple Route"
        Then I see the new page
