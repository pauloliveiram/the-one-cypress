/// <reference types="cypress" />

describe("Validar o endpoint /book/{id}/chapter", () => {
  it("Validar o método GET", () => {
    cy.request("/book/5cf5805fb53e011a64671582/chapter").then((response) => {
      expect(response).to.have.property("headers");
      expect(response.status).to.eql(200);
      expect(response.body.docs).to.be.an("array");
      expect(response.body.docs[0]._id).to.be.a("string");
      expect(response.body.docs[0].chapterName).to.be.a("string");
      expect(response.body.total).to.be.a("number");
      expect(response.body.total).to.eql(response.body.docs.length);
      expect(response.body.limit).to.be.a("number");
      expect(response.body.offset).to.be.a("number");
      expect(response.body.page).to.be.a("number");
      expect(response.body.pages).to.be.a("number");
    });
  });
});
