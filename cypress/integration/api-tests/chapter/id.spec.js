/// <reference types="cypress" />

describe("Validar o endpoint /chapter/{id}", () => {
  it("Validar o método GET", () => {
    cy.request({
      url: "/chapter/6091b6d6d58360f988133b8b",
      headers: {
        Authorization: "Bearer " + Cypress.env("AUTH_TOKEN"),
      },
    }).as("getMovie");
    cy.get("@getMovie").then((response) => {
      expect(response).to.have.property("headers");
      expect(response.status).to.eql(200);
      expect(response.body.docs).to.be.an("array");
      expect(response.body.docs[0]._id).to.be.a("string");
      expect(response.body.docs[0].chapterName).to.be.a("string");
      expect(response.body.docs[0].book).to.be.a("string");
      expect(response.body.total).to.be.a("number");
      expect(response.body.limit).to.be.a("number");
      expect(response.body.offset).to.be.a("number");
      expect(response.body.page).to.be.a("number");
      expect(response.body.pages).to.be.a("number");
    });
  });
});
