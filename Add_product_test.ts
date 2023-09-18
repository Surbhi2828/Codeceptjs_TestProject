const { I } = inject();
const AmazonPage = require('./AmazonPage'); // Correct the path to AmazonPage.js

Feature('Add product');

Scenario('Search for a product on Amazon', async ({ I }) => {
  // Navigate to Amazon and search for a product using AmazonPage    	
  //AmazonPage.searchForProduct();
  // Verify search results
  // Click on a product to view its details
});

Scenario('Add products to the Amazon cart', async ({ I }) => {

  // Click the "Add to Cart" button using AmazonPage
   //I.wait(5);
//AmazonPage.addToCart();
});

Scenario('Check if a product is added to the Amazon cart', async ({ I }) => {
  // Verify that the product is added to the cart
});

