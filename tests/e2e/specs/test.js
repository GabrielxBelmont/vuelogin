// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("#input-12")
      .click()
      .type("Pablo");
    cy.get("#senha")
      .click()
      .type("12345");
    cy.get(".v-btn__content").click();
    cy.get(".v-toolbar__title").should("include.text", "Bem vindo Pablo");
  });
});
