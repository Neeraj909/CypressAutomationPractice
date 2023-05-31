// cypress - Spec
describe('My Second Test Suite',function(){
    it('My Second Test cases',function(){
       //verify automated checkbox
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#checkBoxOption1').check().should('be.checked')
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       //select multiple check at a time
       //cy.get('input[type="checkbox"]').check()
       // select based on index
       cy.get('input[type="checkbox"]').check(['option1','option2'])
       

})
})
