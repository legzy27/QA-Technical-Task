/// <reference types= "cypress" />
import { Given, Then, } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the web page", function () {
    cy.visit('https://www.gov.uk/calculate-your-holiday-entitlement')
    //allow coookies
    cy.get('[data-accept-cookies="true"]').click();
    //click to hide message
    cy.get('.gem-c-cookie-banner__hide-button').click();

});


Then("I navigate to calculate holiday entitlement", function () {
    cy.contains('Start now').click();
});

Then("I select required options", function () {
    cy.get('#response-0').check();
    //Click on continue button
    cy.contains('Continue').click();
    cy.get('#response-0').check();
    cy.contains('Continue').click();
    cy.get('#response').type('0');
    cy.contains('Continue').click();

});

Then("I should see no entitlement", function () {
 cy.contains('There is problem').should('be.visible');

});
