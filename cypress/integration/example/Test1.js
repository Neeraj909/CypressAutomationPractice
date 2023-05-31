// cypress - Spec
describe('My First Test Suite',function(){
    it('My First Test cases',function(){
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
       //get the text for element

       cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {
        const textVeg= $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
       })
       // get the logo
      cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())
      })
     // const logo=cy.get('.brand').text();
      //cy.log(logo)
      //assert logo
      cy.get('.brand').should('have.text','GREENKART')

      



})
})
