/// <reference types="cypress" />

describe('Avaliação Técnica Paradigma', () => {
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Register.html')
  })

it('Preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('[ng-model="FirstName"]').type('Joao')
    cy.get('[ng-model="LastName"]').type('da Silva')
    cy.get('[ng-model="EmailAdress"]').type('joao@email.com')
    cy.get('[ng-model="Phone"]').type('4836050099')
    cy.get('input[type="radio"][value="Male"]').check().should('have.value', 'Male')
    cy.get('[ng-model="country"]').select('Select Country')
    cy.contains('button', 'Submit').click()
    cy.get('.success').should('be.visible')
})

})