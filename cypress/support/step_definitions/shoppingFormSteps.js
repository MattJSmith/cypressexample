
  When("the customer clicks learn more about {string}", (courseName) => {
    const corseHeaderElement = cy.get('[class="product-title"][title="'+courseName+'"]')
    const parentElement = corseHeaderElement.parent('[class="course clist cs-course-list"]')
    parentElement.child('[class="cs-learn-add"][class="cs-btn-inner"]').click();
  });
  
  When("the course is added to the cart with the details {string} {string} with a printed certificate", (language, testCenter) => {
    
    const languageLabelElement = cy.get('[class*="product-variants-item"] [class="control-label"]').contains(language)
    const languageDropdown = languageLabelElement.parent().find('.form-control-select')
    languageDropdown.select(language)

    const testCentreLabelElement = cy.get('[class*="product-variants-item"] [class="control-label"]').contains(testCenter)
    const testCentreDropdown = testCentreLabelElement.parent().find('.form-control-select')
    testCentreDropdown.select(testCenter)

    const printedCertLabelElement = cy.get('label').contains('printed certificate')
    const printedCertTickBox = printedCertLabelElement.parent().find('input')
    printedCertTickBox.click()

    cy.get('[data-button-action="add-to-cart"]').click();
  });
  
  Then("the total cost comes to {string}", (expectedCost) => {

    cy.get('[class="product-total"] [class="value"]').then(($productTotalElement) => {
      expect($productTotalElement.text()).to.equal(expectedCost);
    });
  });