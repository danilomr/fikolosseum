import { ButtonSelector, TextFieldSelector } from '@fnox/fabstracta';
import '../support/commands';

export class HomePage {
	visit(path = '/') {
		console.log(`%c Navigating to: ${path}`, 'color: #ff8971');
		return cy.visit(path);
	}

	getCounterButton() {
		const button = new ButtonSelector();

		const selector = button.byVariant('secondary').bySize('small').byText('Increase Clicks').getSelector();

		cy.log('Debug Counter button');
		return cy.get(selector).debug();
	}

	getCitiesButton() {
		const button = new ButtonSelector();
		const selector = button.byText('Fetch Cities').getSelector();
		cy.log('Fetching cities...');
		return cy.get(selector);
	}

	getCitiesTableRows() {
		return cy.get('table tbody tr');
	}

	getInput() {
		const input = new TextFieldSelector();
		return cy.get(input.byLabel('Your thoughts go here ...').getSelector());
	}

	getCounterText() {
		return cy.get('.counter');
	}
}
