Feature: Search and Purchase Product

  Scenario: Successful search and purchase of a product
    Given I am on the homepage of the online store
    When I enter "laptop" into the search bar
    And I click on the search button
    Then I should see a list of laptops
    When I click on the first laptop in the search results
    Then I should be taken to the product detail page
    And I should see the product title as "laptop"
    When I click on the "Add to Cart" button
    Then the product should be added to the cart
    And I should see the cart icon indicating 1 item
    When I click on the cart icon
    Then I should be taken to the cart page
    And I should see the laptop in the cart
    When I click on the "Proceed to Checkout" button
    And I enter my shipping details
      | Name        | Address           | City     | State | Zip   |
      | John Doe    | 123 Main St       | Anytown  | CA    | 12345 |
    And I enter my payment details
      | Card Number      | Expiry Date | CVV  |
      | 4111 1111 1111 1111 | 12/25       | 123  |
    And I click on the "Place Order" button
    Then I should see a confirmation message
    And I should receive an email with the order details
