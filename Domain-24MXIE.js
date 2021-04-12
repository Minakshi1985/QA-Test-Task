/// <reference types ="cypress"/>

describe('Testing 24MX.ie domain- Test Cases', function() 
{ beforeEach(function(){
        
  cy.visit('https://www.24mx.ie/')  //Opens the url
  cy.url().should('include', '24mx')
 
})

    it('Test case 1-SEARCH OPTION', function() 

    {
      cy.get('#search-tablet').type('helmets{enter}') // Searched 638 products
      cy.get('.container > ul > :nth-child(3) > .a-textlink')
      .should('be.visible').and('contain','helmets')
    })

    it('Test case 2- Add your bike', function() // Add your bike 

    {
      cy.wait(600)
      cy.contains('Add your bike').get('body.schedule-mega-tent-campaign.o-homepage__body.no-touch:nth-child(2) header.o-header div.o-mobile-header.ng-star-inserted div.container-fluid.pl-0.pr-0 div.row.no-gutters.align-items-center div.col.col-4.col-md-2.text-right div.o-mobile-header__fmbicon.m-header-column div.m-header-button.m-header-button--icon.qa-mobile-header-fmb-toggle p-fmb-vehicles-count:nth-child(1) p-fmb-icon:nth-child(1) > i.icon.icon-sb-mx-chassi').click()
      cy.contains("That's ok").get('.col-4 > .m-button').click()
      cy.contains ('Select brand').get('body.schedule-mega-tent-campaign.o-homepage__body.no-touch.noscroll-fixed:nth-child(2) header.o-header div.o-mobile-header.ng-star-inserted div.container-fluid.pl-0.pr-0 div.row.no-gutters.align-items-center p-fmb-drawer.ng-star-inserted div.o-fmb-drawer-wrapper div.o-fmb-drawer-container div.col-md-4.no-padding p-fmb-select-vehicle.o-fmb-drawer-model div.o-fmb-select-vehicle.o-fmb-select-vehicle--layout-drawer.channel-24mx.o-fmb-select-vehicle--bg div.container.o-fmb-select-vehicle__content.o-fmb-select-vehicle__content-default p-fmb-select.ng-star-inserted:nth-child(2) p-select.gtm_fmb-select-brand div.m-select.m-select--dark div.m-select__display > span.a-select__display-placeholder').click()
      cy.wait(1000)
      cy.contains('Honda').get('.m-select__items-wrapper > ul > :nth-child(3) > .ng-star-inserted').click()
      cy.contains ('Select model year').get('.gtm_fmb-select-year > .m-select > .m-select__display > .a-select__display-placeholder').click()
      cy.wait(1000)
      cy.contains('2021').get('.gtm_fmb-select-year > .m-select > .m-select__container > .m-select__items-wrapper > ul > :nth-child(1) > .ng-star-inserted').click()
      cy.contains('Select model').get('.gtm_fmb-select-model > .m-select > .m-select__display > .a-select__display-placeholder').click()
      cy.wait(1000)
      cy.contains('Honda CRF 110F 2021').get('.gtm_fmb-select-model > .m-select > .m-select__container > .m-select__items-wrapper > ul > :nth-child(1) > .ng-star-inserted').click()
    })

    it('Test case 3- Motorcross Gear', function() // Select an item from Motorcross Gear and add to cart 

    {
      cy.wait(600) 
      cy.contains("That's ok").get('.col-4 > .m-button').click()
      cy.get('.o-mobile-header__menu').click() // Click on the Menu button on the left side "three horizontal line icon"
      cy.get('.NostoOverlayClose').click() //click to close the "Show my coupon option"
      cy.get(':nth-child(1) > a.ng-tns-c73-9').click() //
      cy.get('.m-navigation-mobile-sub-item > :nth-child(5) > a.ng-tns-c73-9 > .a-navigation-mobile-item-title').click()
      cy.get(':nth-child(2) > a.ng-tns-c160-12 > div.ng-tns-c160-12').click()
      cy.get('.m-slide-banner__close > .m-button').click() // Click on close to close the advertisment coming over.
      cy.get(':nth-child(34) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-img').click()
      cy.get('p-button.ng-star-inserted > .m-button').click() // Add to cart
     
   
    })
    it('Test case 4- Motorcross Parts', function() // Select an item from Motorcross Parts and add to cart 

    {
      cy.wait(600) 
      cy.contains("That's ok").get('.col-4 > .m-button').click()
      cy.get('.o-mobile-header__menu').click() // Click on the Menu button on the left side "three horizontal line icon"
      cy.get(':nth-child(2) > a.ng-tns-c73-9').click() // Click on Motorcross Parts  
      cy.get('.m-navigation-mobile-sub-item > :nth-child(2) > a.ng-tns-c73-9').click() // Click on brake parts
      cy.get('.m-slide-banner__close > .m-button').click() // Click on close to close the advertisment coming over.
      cy.get('.NostoOverlayClose').click() // click to close the "Show my coupon option"
      cy.get(':nth-child(1) > a.ng-tns-c160-12').click() // click on Other brake parts
      cy.get(':nth-child(33) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-img > .o-product-card__flags').click() // Click on the part to select it
      cy.get('.m-select__display').click()// Select lenghth of the part
      cy.get('.a-product-variation__title').click()// Select 55
      cy.get('p-button.ng-star-inserted > .m-button').click() // Add to cart
      cy.wait(1000) 
     
    })
    it('Test case 5- Motorcross Accessories', function() // Select an item from Motorcross Accessories and add to cart 

    {
      cy.wait(600)
      cy.contains("That's ok").get('.col-4 > .m-button').click()
      cy.get('.o-mobile-header__menu').click() // Click on the Menu button on the left side "three horizontal line icon"
      cy.get('[href="/motocross-accessories"]').click() // Click on Motorcross Accessories
      cy.get('.m-navigation-mobile-sub-item > :nth-child(1) > a.ng-tns-c73-9').click()// Click on washing and cleaning
      cy.get('.m-slide-banner__close > .m-button').click()// Click on close offer
      cy.get('.NostoOverlayClose').click()//Click on cross
      cy.get('body.schedule-mega-tent-campaign.no-touch:nth-child(2) div.content-wrapper:nth-child(3) p-sub-category.ng-star-inserted:nth-child(2) div.o-productlist div.o-productlist__wrapper div.container div.row.row--tight.row--grid.qa-pl-items-grid div.col-6.col-md-3.col-xl-2.col--product-card.order-1.ng-star-inserted:nth-child(32) a.o-product-card__blocklink.ng-star-inserted div.o-product-card.ng-star-inserted div.o-product-card__container div.m-product-card-img > img.m-product-card-img__fade-in.ng-star-inserted.m-product-card-img__fade-in--show').click()
      cy.get('p-button.ng-star-inserted > .m-button').click()// Add to Cart
     
    })

    
  })

  