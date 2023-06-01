describe('Handle alert popup',function(){
    it('andle alert popup Test cases',function(){
       //cypress auto accpet popup
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#alertbtn').click()
       cy.get('#confirmbtn').click()
       //window:alert 
       cy.on('window.alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
       })

       //window:confirm 
       cy.on('window.confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
       })

       //handle new tab 
       cy.get('#opentab')

    })
})
