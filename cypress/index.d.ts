declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByTestId(selector: string): Chainable<any>;
    setPrefersColorScheme(scheme: any): Chainable<any>;
  }
}