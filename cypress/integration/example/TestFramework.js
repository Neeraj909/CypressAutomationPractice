/// <reference types="Cypress" />
 describe('Hooks Test cases',function()
 {
   before(function(){
    //read data from fixtrue
    cy.fixture('example').then(function(data){
      this.data=data
    })

   })
   it('First Test cases',function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)
    cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
    cy.pause()
    cy.get(':nth-child(2) > .nav-link').click()
    this.data.productName.forEach(function(element){
      cy.selectProduct(element)
    });

   })
 })
