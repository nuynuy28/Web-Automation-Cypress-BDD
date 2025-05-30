import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in to saucedemo web", () => {
    const username = "standard_user";
    const password = "secret_sauce";
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.get("#login-button").click();
  cy.url().should("include", "/inventory");
});


When('I click add "Sauce Labs Backpack" to the cart', () => {
  cy.contains(".inventory_item", "Sauce Labs Backpack").find("button").click();
});

Then("I see {string} on the shopping cart", (count) => {
  cy.get(".shopping_cart_badge").should("contain", count);
});

When('I continue to add "Sauce Labs Fleece Jacket" to the cart', () => {
    cy.contains(".inventory_item", "Sauce Labs Fleece Jacket").find("button").click();
});

Then("I see my shopping cart should now {string}", (count) => {
    cy.get(".shopping_cart_badge").should("contain", count);
});

