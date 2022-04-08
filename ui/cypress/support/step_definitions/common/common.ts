import '../../commands';
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

// Common step definitions go here

Given('I click on button {string}', (name: string) => {
	cy.findByRole('button', { name }).click();
});

Then('I should see text {string}', (text: string) => {
	cy.contains(text);
});
