
Given("the browser is on the page {string}", (url) => {
    cy.visit(url);

    try{
      cy.get('[id="isqi-cust-popup-outers"] [class="close-popup-header"]').click();
    }
    catch{
      console.log("The Popup asking to verify your country did not appear so continueing test.")
    }

  });