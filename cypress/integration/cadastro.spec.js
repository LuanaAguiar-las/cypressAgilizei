/// <reference types="cypress" />


describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app');

        cy.get('input[name=firstName]').type('Luana');
        cy.get('input[name=lastName]').type('Aguiar');
        cy.get('textarea[name=adress]').type('Rua Mato Grosso, 520 - casa 05 - Santa Cecília - Teresópolis/RJ');
        cy.get('input[name=emailAdress]').type('luanatere@hotmail.com');

        cy.get('input[value=f]').check();
        cy.get('input[type=checkbox]').check('Netflix');
        cy.get('input[type=checkbox]').check('Dormir');
        
        cy.get('select#countries').select('Dinamarca', {force: true});
        cy.get('select#years').select('1983', {force: true});
        cy.get('select#months').select('Fevereiro', {force: true});
        cy.get('select#days').select('14', {force: true});

        cy.get('input#firstpassword').type('Abc123!');
        cy.get('input#secondpassword').type('Abc123!');

        cy.get('button#submitbtn').click();

        cy.url().should('contain', 'listagem')
        cy.get('tbody#users').should('include.text', 'luanatere@hotmail.com');
        cy.get('tbody#users').should('include.text', 'Aguiar');

    
        
    });
});
