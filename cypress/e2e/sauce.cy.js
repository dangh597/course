import selectors from '../support/sauceSelectors'

describe('sauce automated tests examples', () => {
  it('visits saucedemo home page', () => {
    cy.visit(Cypress.env('sauceUrl'))
    cy.url().
    should('eq', 'https://www.saucedemo.com/')
  })
  it('fails login with incorrect credentials', () => {
    cy.visit(Cypress.env('sauceUrl'));
    cy.get(selectors.usernameId).type(Cypress.env('sauceBadUser'))
    cy.get(selectors.passwordId).type('secret_sauce')
    cy.get(selectors.loginButtonId).click()
    cy.get(selectors.loginErrorHeader)
    .invoke('text')
    .should('eq', "Epic sadface: Username and password do not match any user in this service")
  })
  it('logins succesfully', () => {
    cy.visit(Cypress.env('sauceUrl'))
    cy.get('#user-name').type(Cypress.env('sauceUser'))
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url()
    .should('eq', 'https://www.saucedemo.com/inventory.html')
  })
  it('checks locked out user', () => {
    cy.visit(Cypress.env('sauceUrl'))
    cy.get(selectors.usernameId).type('locked_out_user')
    cy.get(selectors.passwordId).type('secret_sauce')
    cy.get(selectors.loginButtonId).click()
    cy.get(selectors.loginErrorHeader)
    .invoke('text')
    .should('eq', "Epic sadface: Sorry, this user has been locked out.")
  })
})