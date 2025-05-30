Feature: Checkout

  Scenario: User see shopping list before checkout
    Given I want to add product 
    When I click shopping cart
    Then I should see my products "Sauce Labs Backpack" and "Sauce Labs Fleece Jacket"
    And I click button checkout
