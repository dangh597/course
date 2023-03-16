import selectors from '../fixtures/selectors'

Cypress.Commands.add('login', (user, password) => {
    cy.session([user, password], () => {
        cy.visit(Cypress.env("sauceUrl"))
        cy.get(selectors.loginUsernameInput).type(Cypress.env('sauceUser'), { log: false });
        cy.get(selectors.loginPasswordInput).type(Cypress.env('SAUCEPASSWORD'), { log: false });
        cy.get(selectors.loginButton).click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})
