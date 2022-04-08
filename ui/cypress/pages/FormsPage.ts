import { TextFieldSelector } from '@fnox/fabstracta';

export class FormsPage {
	getInput() {
		const input = new TextFieldSelector();
		return cy.get(input.byLabel('Your thoughts go here ...').getSelector());
	}
}
