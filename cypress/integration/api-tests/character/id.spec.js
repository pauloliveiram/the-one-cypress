/// <reference types="cypress" />

describe('Validar o endpoint /character/{id}', () => {
  it('Validar o método GET', () => {
    cy.request({
      url: '/character/5cd99d4bde30eff6ebccfbbe',
      headers: {
        'Authorization': 'Bearer ' + Cypress.env('AUTH_TOKEN'),
      },
    }).as('getMovie')
    cy.get('@getMovie').then(response => {
      expect(response).to.have.property('headers')
      expect(response.status).to.eql(200)
      expect(response.body.docs).to.be.an('array')
      expect(response.body.docs[0]._id).to.be.a('string')
      expect(response.body.docs[0].height).to.be.a('string')
      expect(response.body.docs[0].race).to.be.a('string')
      expect(response.body.docs[0].gender).to.be.a('string')
      expect(response.body.docs[0].birth).to.be.a('string')
      expect(response.body.docs[0].spouse).to.be.a('string')
      expect(response.body.docs[0].death).to.be.a('string')
      expect(response.body.docs[0].realm).to.be.a('string')
      expect(response.body.docs[0].hair).to.be.a('string')
      expect(response.body.docs[0].name).to.be.a('string')
      expect(response.body.docs[0].wikiUrl).to.be.a('string')
      expect(response.body.total).to.be.a('number')
      expect(response.body.limit).to.be.a('number')
      expect(response.body.offset).to.be.a('number')
      expect(response.body.page).to.be.a('number')
      expect(response.body.pages).to.be.a('number')
    })
  });
})