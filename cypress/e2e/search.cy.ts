describe('Checking the result from api', () => {
  it("Search for the world 'hello'", () => {
    cy.visit("http://localhost:3000/")
    cy.getByTestId("search-input").type("hello")
    cy.get('[aria-label="search-word"]').click()

    cy.getByTestId("result-word").should("contain", "hello")
  })
})