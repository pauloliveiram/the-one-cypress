/// <reference types="cypress" />

describe("Validar o endpoint /quote", () => {
  it("Validar o método GET", () => {
    cy.request({
      url: "/quote",
      headers: {
        Authorization: "Bearer " + Cypress.env("AUTH_TOKEN"),
      },
    }).as("getMovie");
    cy.get("@getMovie").then((response) => {
      expect(response).to.have.property("headers");
      expect(response.status).to.eql(200);
      expect(response.body.docs).to.be.an("array");
      expect(response.body.docs[0]._id).to.be.a("string");
      expect(response.body.docs[0].dialog).to.be.a("string");
      expect(response.body.docs[0].movie).to.be.a("string");
      expect(response.body.docs[0].character).to.be.a("string");
      expect(response.body.docs[0].id).to.be.a("string");
      expect(response.body.total).to.be.a("number");
      expect(response.body.limit).to.be.a("number");
      expect(response.body.offset).to.be.a("number");
      expect(response.body.page).to.be.a("number");
      expect(response.body.pages).to.be.a("number");
    });
  });
});
