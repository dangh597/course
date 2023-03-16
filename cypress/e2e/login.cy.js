import selectors from '../fixtures/selectors'
import errors from '../fixtures/errorMessages.json'
//test suite
describe('Login page tests', () => {
  it('logins succesfully', () => {
    cy.get(selectors.loginUsernameInput).type(Cypress.env('sauceUser'));
    cy.get(selectors.loginPasswordInput).type(Cypress.env('saucePassword'), {log: false});
    cy.get(selectors.loginButton).click();
    cy.url()
      .should('eq', 'https://www.saucedemo.com/inventory.html');
  })
  it('fails login with incorrect credentials', () => {
    cy.get(selectors.loginUsernameInput).type(Cypress.env('sauceBadUser'));
    cy.get(selectors.loginPasswordInput).type(Cypress.env('saucePassword'), {log: false});
    cy.get(selectors.loginButton).click();
    cy.get(selectors.loginErrorHeader)
      .invoke('text')
      .should('eq', errors.invalidLoginError)
  })
  it('fails login with locked user', () => {
    cy.get(selectors.loginUsernameInput).type(Cypress.env('sauceLockedUser'));
    cy.get(selectors.loginPasswordInput).type(Cypress.env('saucePassword'), {log: false});
    cy.get(selectors.loginButton).click();
    cy.get(selectors.loginErrorHeader)
      .invoke('text')
      .should('eq', errors.lockedLoginError);
  })
})