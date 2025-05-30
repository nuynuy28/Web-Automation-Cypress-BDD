import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const username = "standard_user";
const password = "secret_sauce";

Given("I want to add product", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
  cy.url().should("include", "/inventory");

  //add item
  cy.contains(".inventory_item", "Sauce Labs Backpack").find("button").click();
  cy.contains(".inventory_item", "Sauce Labs Fleece Jacket").find("button").click();
});

When("I click shopping cart", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});

Then('I should see my products {string} and {string}', (product1, product2) => {
  cy.get(".cart_item").should("contain.text", product1);
  cy.get(".cart_item").should("contain.text", product2);
});

Then("I click button checkout", () => {
  cy.get('#checkout').click();
  cy.url().should("include", "/checkout-step-one.html");
});
