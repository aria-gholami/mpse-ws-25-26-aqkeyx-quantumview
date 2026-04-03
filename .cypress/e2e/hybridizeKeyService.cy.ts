describe('Test Hybridize Key Service Form', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.intercept('GET', '**/api/v1/hks/kem').as('hksKemApi');
        cy.intercept('GET', '**/api/v1/hks/macm').as('hksMacmApi');
        cy.intercept('GET', '**/api/v1/hks/macuf').as('hksMacufApi');
        cy.intercept('POST', '**/api/v1/run').as('runTestApi');
        cy.visit('/');
    });

    it('Navigate to /hybridize-key-service and submit form successfully.', () => {
        cy.contains('a', 'Hybridize Key Service')
            .should('be.visible')
            .click();
        cy.wait(['@hksKemApi', '@hksMacmApi', '@hksMacufApi'], { timeout: 20000 })
            .then((interceptions) => {
                interceptions.forEach((i) => expect(i.response?.statusCode).to.eq(200));
            });
        cy.contains('h1', 'Hybridize Key Service').should('be.visible');

        cy.get('#experiment-name').type('Success');
        cy.get('.primary-button').click();
        cy.wait('@runTestApi', { timeout: 20000 })
            .its('response.statusCode')
            .should('eq', 200);
    });

    it('Navigate to /hybridize-key-service and submit form with error thrown.', () => {
        cy.contains('a', 'Hybridize Key Service')
            .should('be.visible')
            .click();
        cy.wait(['@hksKemApi', '@hksMacmApi', '@hksMacufApi'], { timeout: 20000 })
            .then((interceptions) => {
                interceptions.forEach((i) => expect(i.response?.statusCode).to.eq(200));
            });
        cy.contains('h1', 'Hybridize Key Service').should('be.visible');

        cy.get('#experiment-name').type('Invalid');
        cy.get('.primary-button').click();
        cy.wait('@runTestApi', { timeout: 20000 })
            .its('response.statusCode')
            .should('eq', 500);
        cy.contains('h2', 'Error: Test Run Failed').should('be.visible');
    });
});
