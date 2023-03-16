import selectors from "../fixtures/selectors"

describe('Inventory cart tests', () => {
    it('adds backpack succesfully', () => {
        cy.visit('/inventory.html', {failOnStatusCode: false})
        cy.get(selectors.backpackAddCartButton).click()
        cy.get(selectors.shoppingCartBadge).invoke('text').should('eq', '1')
        cy.get(selectors.shoppingCartContainer).click()
        cy.get(selectors.shoppingCartItem).invoke('text').should('eq', 'Sauce Labs Backpack')
    })
    it('adds backpack and deletes it succesfully', () => {
        cy.visit('/inventory.html', {failOnStatusCode: false})
        cy.get(selectors.backpackAddCartButton).click()
        cy.get(selectors.shoppingCartBadge).invoke('text').should('eq', '1')
        cy.get(selectors.shoppingCartContainer).click()
        cy.get(selectors.shoppingCartItem).invoke('text').should('eq', 'Sauce Labs Backpack')
        cy.go('back')
        cy.get(selectors.backpackDeleteCartButton).click()
        cy.get(selectors.shoppingCartBadge).should('not.exist')

    })
    it('adds backpack and bike light succesfully', () => {
        cy.visit('/inventory.html', {failOnStatusCode: false})
        cy.get(selectors.backpackAddCartButton).click()
        cy.get(selectors.shoppingCartBadge).invoke('text').should('eq', '1')
        cy.get(selectors.bikelightAddCartButton).click()
        cy.get(selectors.shoppingCartBadge).invoke('text').should('eq', '2')
        cy.get(selectors.shoppingCartContainer).click()
        const cartElements = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']
        cy.get(selectors.shoppingCartItem).should('have.length', 2)
        .then($el => {
            return Cypress.$.makeArray($el).map((el) => el.innerText)
        })
        .should('deep.equal', cartElements, {log: false})
    })
})