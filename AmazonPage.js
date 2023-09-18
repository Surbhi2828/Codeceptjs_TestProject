const { I } = inject();

const AmazonPage = {
  // Page Elements
  

   // Actions
  searchForProduct: async (query) => {
    // Enter the search query into the search box and wait for it
    I.amOnPage('/');       
    I.wait(5);
    I.fillField('#twotabsearchtextbox', 'android phone'); 
	 I.wait(5);
    I.pressKey('Enter'); 
    
    I.wait(2);
   
  },

  clickProductLink: async () => {
     I.click('#search > div.s-desktop-width-max.s-desktop-content.s-wide-grid-style-t1.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6) > div > div > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.sg-col-12-of-24.s-list-col-right > div > div > div.a-section.a-spacing-none.puis-padding-right-small.s-title-instructions-style > h2 > a > span');
	I.wait(5);
   
    //I.waitForClickable('#add-to-cart-button', 10); 
    await I.waitForClickable('#add-to-cart-button');
  },

  addToCart: async () => {
    // Click the "Add to Cart" button and wait for success
	
     I.pressKey('#add-to-cart-button');
    
  },
};

module.exports = AmazonPage;


