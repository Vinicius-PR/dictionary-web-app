describe("Theme switching test", () => {
  it("should change the background color when switching themes", () => {
    cy.visit('http://localhost:3000');

    cy.getByTestId("switch-handler-theme").then(($switch) => {
      const isChecked = $switch.is(':checked')
      console.log($switch);

      if(isChecked) {
        // If is checked, means that are using 'dark' theme
        cy.get('body')
          .should('have.css', 'background-color')
          .and('eq', 'rgb(5, 5, 5)');
        
        cy.wrap($switch).click({ force: true })
        
        // check if it change to 'light' theme
        cy.get('body')
          .should('have.css', 'background-color')
          .and('eq', 'rgb(255, 255, 255)');
      } else {
        // If is NOT checked, means that are using 'light' theme
        cy.get('body')
          .should('have.css', 'background-color')
          .and('eq', 'rgb(255, 255, 255)');

        cy.wrap($switch).click({ force: true })
        
        // check if it change to 'dark' theme
        cy.get('body')
          .should('have.css', 'background-color')
          .and('eq', 'rgb(5, 5, 5)');
      }
    })    
  })
})