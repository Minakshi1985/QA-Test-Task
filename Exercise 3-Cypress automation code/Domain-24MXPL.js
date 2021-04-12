/// <reference types ="cypress"/>

describe('Testing 24MX.ie domain- Test Cases', function() 
{ beforeEach(function(){
        
  cy.visit('https://www.24mx.pl/')  //Opens the url
 
})

it('Test case 1-SEARCH OPTION', function()  // Searched number of products available.
 
    {
      cy.contains("OK").get('.col-4 > .m-button').click()
      cy.get('#search-tablet').type('helmets{enter}') // Searched 8 products
      
    })
/*
    it('Test case 2- Status of the Order', function() // To check Order status

    {
      cy.wait(600) 
      cy.contains("OK").get('.col-4 > .m-button').click()
      cy.get('.o-mobile-header__menu').click() // Click on the Menu button on the left side "three horizontal line icon"
      cy.get('.NostoOverlayClose').click() // Click on the cross
      cy.get('.o-mobile-menu__icon-list > :nth-child(2) > a').click()// Click on Order status
      cy.get('.ng-valid > p-input[type="email"] > .m-input > .ng-untouched').type('test@123.com') // Enter email id
      cy.get(':nth-child(2) > .m-input > .ng-untouched').type('123456') // Enter Order Number
      cy.get('.m-order-form__container > p-button').click() // Click on Track you order button

    })
    
    it('Test case 3-Superdeals', function()  // To Check Superdeals and Select product and add to cart
    {
    cy.wait(600) 
    cy.contains("OK").get('.col-4 > .m-button').click()
    cy.get('.o-mobile-header__menu').click() // Click on the Menu button on the left side "three horizontal line icon"
    cy.get('.NostoOverlayClose').click() // Click on the cross
    cy.get('.superdeals > .a-navigation-mobile-item-title').click() // click on superdeals option
    cy.get('.m-slide-banner__close > .m-button').click()// Close the advertisement
    cy.get(':nth-child(12) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-img > .m-product-card-img__fade-in').click()
    cy.get('.m-select__display').click() // select colour
    cy.get('.m-select__items-wrapper > ul > :nth-child(1)').click()// Choose colour
    cy.get('p-button.ng-star-inserted > .m-button').click() // Add to basket
    cy.wait(1000) 
    cy.get('.o-cart-process__added > p-button > .m-button').click()
   // cy.get('.o-xsell-products__product--current > .o-xsell-products__btns > .row > .col-12 > [customclass="m-button m-button--navigation"] > .m-button').click()
   // cy.get('.o-xsell-products__product--current > .o-xsell-products__btns > .row > .col-12 > [customclass="m-button m-button--navigation"] > .m-button').click()

})
it('Test case 4- Subscribe to Newsletter', function()  // Subscribe to newsletter to get notifications on new offers and deals 
    {
    cy.wait(600) 
    cy.contains("OK").get('.col-4 > .m-button').click()
    cy.get('.NostoOverlayClose').click() // close advertisement
    cy.scrollTo("bottom").get('#newsletterEmailInput').type('test1@gmail.com') // email address 
    cy.get('p-button > .m-button').click()// Click to send email address

})
it('Test case 5- Link to Facebook', function() // Check whether the link to Facebook in the footer is working or not
    {
    cy.wait(600) 
    cy.contains("OK").get('.col-4 > .m-button').click()
    cy.get('.NostoOverlayClose').click() // close advertisement
    cy.scrollTo("bottom")
    cy.get('.NostoRibbonPopUpText').click()
    cy.get('.NostoOverlayClosePermanently').click()     
    cy.get('p-footer-facebook > .textsize-small > .ng-fa-icon > .svg-inline--fa').click() // Click on the facebook icon "f"
    
})*/
})