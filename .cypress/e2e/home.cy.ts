describe('Test Home', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.intercept('GET', '**/cms/landingpage.json').as('cmsLandingpage');
        cy.visit('/');
    });

    it('Display home screen.', () => {
        cy.visit('/');
        cy.wait('@cmsLandingpage', { timeout: 20000 })
            .its('response.statusCode')
            .should('eq', 200);
    });
});
