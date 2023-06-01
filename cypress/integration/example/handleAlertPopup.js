import 'cypress-iframe'
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
       //cy.get('#opentab').invoke('removeAttr','target').click()

       //cy.url().should('include','qaclickacademy')

       //cy.go('back')

       //handle child tab without target attribute
    //    cy.get('#opentab').then(function(el){
    //     const url=el.prop('href')
    //     cy.visit(url)
    //     //help of origin method can interact  to new tab locaotr 
    //     cy.origin(url,() =>{
    //         cy.get(".navbar-nav.ml-auto a[href*='about']").click()
    //         //cy.url.should('include','about')
    //     })
    //    })
       
///handle frames
      //first install iframe library 
      //then import iframe

     cy.frameLoaded('#courses-iframe')
     cy.iframe().find(".navigation.clearfix a[href*='mentorship']").eq(0).click()



    })
})
