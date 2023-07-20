/// <reference types="cypress" />

describe("Validar o endpoint /movie", () => {
  it("Validar o método GET", () => {
    cy.request({
      url: "/movie",
      headers: {
        Authorization: "Bearer " + Cypress.env("AUTH_TOKEN"),
      },
    }).as("getMovie");
    cy.get("@getMovie").then((response) => {
      expect(response).to.have.property("headers");
      expect(response.status).to.eql(200);
      expect(response.body.docs).to.be.an("array");
      expect(response.body.docs[0]._id).to.be.a("string");
      expect(response.body.docs[0].name).to.be.a("string");
      expect(response.body.docs[0].runtimeInMinutes).to.be.a("number");
      expect(response.body.docs[0].budgetInMillions).to.be.a("number");
      expect(response.body.docs[0].boxOfficeRevenueInMillions).to.be.a(
        "number",
      );
      expect(response.body.docs[0].academyAwardNominations).to.be.a("number");
      expect(response.body.docs[0].academyAwardWins).to.be.a("number");
      expect(response.body.docs[0].rottenTomatoesScore).to.be.a("number");
      expect(response.body.total).to.be.a("number");
      expect(response.body.total).to.eql(response.body.docs.length);
      expect(response.body.limit).to.be.a("number");
      expect(response.body.offset).to.be.a("number");
      expect(response.body.page).to.be.a("number");
      expect(response.body.pages).to.be.a("number");
    });
  });
});
