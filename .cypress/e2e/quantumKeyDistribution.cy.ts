describe('Test Quantum Key Distribution', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/');
    });

    it('Display quantum key distribution screen.', () => {
        cy.contains('a', 'Quantum Key Distribution')
            .should('be.visible')
            .click();
        cy.contains('h1', 'Agile Q Key Exchange').should('be.visible');
    });
});
