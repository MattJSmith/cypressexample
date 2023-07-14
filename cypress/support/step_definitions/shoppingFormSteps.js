
  When("the customer clicks learn more about {string}", (courseName) => {
   cy.get('[class="product-title"][title='+courseName+'][class="cs-learn-add"][class="cs-btn-inner"]').click();
  });
  
  When("the course is added to the cart with the details {string} {string} with a printed certificate", (language, testCenter) => {
    //set 1st dropdown to language
    //set 2nd dropdown to testCentre
    //click tickbox for printed cert
    //click add to cart
  });
  
  Then("the total cost comes to {string}", (expectedCost) => {

    //compare price against expectedCost
  });