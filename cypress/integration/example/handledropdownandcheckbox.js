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
    
       //handle web table
       cy.get('.left-align #product tbody td:nth-child(2)').each(($e1,index,$list)=>{
        const text=$e1.text()
        if(text.includes('Python')){
            //for sibling element process have to use next and then method 
            cy.get('.left-align #product tbody td:nth-child(2)').eq(index).next().then(function(price){
                const priceText=price.text()
                expect(priceText).to.equal('25')
            })
        }
       })
    // handle mouse hover
    // invoke(show) method will show all hiden element
    cy.get('.mouse-hover-content').invoke('show')
    //cy.contains('Top').click({force: true})
    cy.contains('Top').click()
    cy.url().should('include','top')

    


})
})
