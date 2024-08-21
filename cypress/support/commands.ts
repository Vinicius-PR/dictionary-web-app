/// <reference types="cypress" />

Cypress.Commands.add("getByTestId", (selector) => {
  return cy.get(`[data-testid=${selector}]`)
})

Cypress.Commands.add('setPrefersColorScheme', (scheme) => {
  cy.window().then((win) => {
    cy.stub(win, 'matchMedia').callsFake((query) => {
      return {
        matches: query.includes(scheme),
        media: query,
        addListener: () => {},
        removeListener: () => {},
      };
    });
  });
});
