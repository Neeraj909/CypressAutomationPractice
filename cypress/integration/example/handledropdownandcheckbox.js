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

       //handle static dropdown
       cy.get('select').select('Option3').should('have.value','option3')

       //handle dynamic dropdown
       cy.get('#autocomplete').type('ind')
       cy.get('.ui-menu-item div').each(($e1, index, $list) =>{

        if($e1.text()=='India'){
            cy.wrap($e1).click()
        }
       })

       cy.get('#autocomplete').should('have.value','India')
})
})
