
//Steps are split by component (or action like navigation), instead of split by page,
//as this is more reusable. E.G. not cloning login steps into multiple page step files.

  When("the customer searches for the course {string}", (courseName) => {
 
    const firstVisibleSearchInput = cy.get('[id="search_widgets"] [id="searchtype"]').filter(':visible').first()
    firstVisibleSearchInput.type(courseName);

    const firstVisibleSearchButton = cy.get('[id="search_widgets"] [id="searchtypebutton"]').filter(':visible').first()
    firstVisibleSearchButton.click();
  });