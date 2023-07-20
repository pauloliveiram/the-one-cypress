/// <reference types="cypress" />

describe("Validar o endpoint /book", () => {
  describe("Sem token de autorização", () => {
    beforeEach(() => {
      cy.request("/book").as("getBook");
    });

    it("Validar header", () => {
      cy.get("@getBook")
        .its("headers")
        .its("content-type")
        .should("include", "application/json");
    });

    it("Validar status code", () => {
      cy.get("@getBook").its("status").should("equal", 200);
    });

    it("Validar corpo da resposta", () => {
      cy.get("@getBook").then((response) => {
        expect(response.body.docs).to.be.an("array");
        expect(response.body.docs[0]._id).to.be.a("string");
        expect(response.body.docs[0].name).to.be.a("string");
        expect(response.body.total).to.be.a("number");
        expect(response.body.total).to.eq(response.body.docs.length);
        expect(response.body.limit).to.be.a("number");
        expect(response.body.offset).to.be.a("number");
        expect(response.body.page).to.be.a("number");
        expect(response.body.pages).to.be.a("number");
      });
    });
  });

  describe("Com token de autorização", () => {
    beforeEach(() => {
      cy.request({
        url: "/book",
        headers: {
          auth: Cypress.env("AUTH_TOKEN"),
        },
      }).as("getBook");
    });

    it("Validar header", () => {
      cy.get("@getBook")
        .its("headers")
        .its("content-type")
        .should("include", "application/json");
    });

    it("Validar status code", () => {
      cy.get("@getBook").its("status").should("equal", 200);
    });

    it("Validar corpo da resposta", () => {
      cy.get("@getBook").then((response) => {
        expect(response.body.docs).to.be.an("array");
        expect(response.body.docs[0]._id).to.be.a("string");
        expect(response.body.docs[0].name).to.be.a("string");
        expect(response.body.total).to.be.a("number");
        expect(response.body.total).to.eq(response.body.docs.length);
        expect(response.body.limit).to.be.a("number");
        expect(response.body.offset).to.be.a("number");
        expect(response.body.page).to.be.a("number");
        expect(response.body.pages).to.be.a("number");
      });
    });
  });
});
