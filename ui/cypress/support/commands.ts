/// <reference types="cypress" />
import '@testing-library/cypress';
import '@testing-library/cypress/add-commands';

// Must be declared global to be detected by typescript (allows import/export)
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			navigate(pageName: string): void;
		}
	}
}

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add('navigate', (pageName) => {
	cy.log(`Visiting /${pageName}`);
	cy.visit(`/${pageName}`);
});

const commandDelay = 0;
const commandsToDelay = ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains'];
for (const command of commandsToDelay) {
	Cypress.Commands.overwrite(
		command,
		(originalFn, ...args) =>
			new Promise((resolve) => {
				setTimeout(() => {
					resolve(originalFn(...args));
				}, commandDelay);
			})
	);
}
// Convert this to a module instead of script (allows import/export)
export {};
