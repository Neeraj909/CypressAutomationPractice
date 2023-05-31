// cypress - Spec
describe('My Second Test Suite',function(){
    it('My Second Test cases',function(){
       //test step 
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  /// using then method for waiting until page is not loaded 

       cy.get('.search-keyword').type('ca')
       cy.wait(2000)
       cy.get('.products').as('ProductLocator')
       //parent child chaining
       cy.get('@ProductLocator').find('.product').should('have.length',4)
       //click though specific locator
       cy.get(':nth-child(2) > .product-action > button').click()
        // click through find method 
       cy.get('@ProductLocator').find('.product').eq(2).contains('ADD TO CART').click()
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.contains('Place Order').click()



})
})
