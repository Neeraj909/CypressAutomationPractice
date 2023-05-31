// cypress - Spec
describe('My First Test Suite',function(){
    it('My First Test cases',function(){
       //test step 
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('.search-keyword').type('ca')
       cy.wait(2000)
       //parent child chaining
       cy.get('.products').find('.product').should('have.length',4)
       //click though specific locator
       cy.get(':nth-child(2) > .product-action > button').click()
        // click through find method 
       cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
       //get the text for element
       cy.get('.products').as('ProductLocator')
       cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {
        const textVeg= $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
       })



})
})
