// cypress - Spec
describe('My Second Test Suite',function(){
    it('My Second Test cases',function(){
       //verify visible and invisible element
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')

       //select radio button 
       cy.get("input[value='radio1']").click().should('be.checked')
       // select dynamically
       cy.get("label[for*='radio']").each(($e1,index,$list) =>{
         
          if($e1.text().trim()=='Radio3'){
           cy.wrap($e1).click()
          }

       })



})
})
