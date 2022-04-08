Feature: Fabstracta Template Page
	Scenario: Opening landing page
		Given I open the landing page
		Then I see simple stuff in the screen

	Scenario: Can type into inputs
		Given I open page "welcome/forms"
		Then I can type things on an input

	Scenario: Can click buttons
		Given I open the landing page
		Then I can click on buttons

	Scenario: Fetch cities
		Given I open page "welcome/fetching"
		Then I can fetch cities

