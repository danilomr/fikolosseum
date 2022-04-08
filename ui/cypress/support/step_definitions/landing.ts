import { FormsPage } from '../../pages/FormsPage';
import { HomePage } from '../../pages/HomePage';
import '../commands';
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const homePage = new HomePage();
const formsPage = new FormsPage();

beforeEach(() => {
	cy.intercept('/build/cities.json', { fixture: 'cities.json' }).as('cities');
	cy.intercept('/api/user/users-v2/me', { fixture: 'currentUser.json' }).as('currentUser');
	cy.intercept('/api/user/users-v2/me/rights', { fixture: 'currentUserRights.json' }).as('currentUserRights');
	cy.intercept('/api/users', { fixture: 'users.json' }).as('users');
	cy.intercept('/api/transaction', { fixture: 'transactions.json' }).as('transaction');
	cy.intercept('/api/profile', { fixture: 'profile.json' }).as('profile');
	cy.intercept('/api/todos/todos-v1?offset=0&limit=10', { fixture: 'todos.json' }).as('todos');
});

Given(/^I open the landing page$/, () => {
	homePage.visit();
});

Given(/^I open page "(.+)"$/, (pageName) => {
	cy.navigate(pageName);
});

When(/^I click on the menu item "(.+)"$/, (menuItem) => {
	cy.findByRole('link', { name: menuItem }).click();
});

Then(/^I see simple stuff in the screen$/, () => {
	cy.log('Seeing simple stuff');
	cy.contains('Welcome');
	cy.contains('You are logged in as Current User');
	cy.contains('FABSTRACTA');
	cy.contains('These are our very own internal awesome icons');
});

Then(/^I can type things on an input$/, () => {
	cy.log('Typing on inputs');
	formsPage.getInput().type('Well well well, we can type here!');
	cy.wait(500);
	cy.contains('Well well well, we can type here!');
});

Then(/^I can click on buttons$/, async () => {
	cy.log('Clicking on buttons');
	homePage.getCounterButton().click();
	homePage.getCounterText().contains(1);
	homePage.getCounterButton().click();
	homePage.getCounterText().contains(2);
});

Then(/^I can fetch cities$/, async () => {
	cy.log('Fetch Cities');
	homePage.getCitiesButton().click();
	cy.wait('@cities');
	homePage.getCitiesTableRows().should('have.length', 100);
});

Then(/^I see the new page$/, () => {
	cy.get('p').contains('Simple Component');
});
