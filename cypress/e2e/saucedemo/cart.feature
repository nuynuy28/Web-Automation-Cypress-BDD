Feature: Shopping Cart

Scenario: User Add item to shopping cart
    Given I am logged in to saucedemo web
    When I click add "Sauce Labs Backpack" to the cart
    Then I see "1" on the shopping cart
    And I continue to add "Sauce Labs Fleece Jacket" to the cart
    Then I see my shopping cart should now "2"


