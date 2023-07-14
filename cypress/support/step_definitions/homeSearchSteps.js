
//Steps are split by component (or action like navigation), instead of split by page,
//as this is more reusable. E.G. not cloning login steps into multiple page step files.

  When("the customer searches for the course {string}", (courseName) => {
 
    cy.get('[id="search_widgets"][id="searchtype"]').type(courseName);
    cy.get('[id="search_widgets"][id="searchtypebutton"]').click();
    
  });