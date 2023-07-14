  When("the customer clicks learn more about {string}", (courseName) => {
   
  });
  
  When("the course is added to the cart with the details {string} {string} with a {string}", (language, testCenter, certificateType) => {

  });
  
  Then("the total cost comes to {string}", (expectedCost) => {

    cy.get("#total-cost").should("have.text", expectedCost);
  });