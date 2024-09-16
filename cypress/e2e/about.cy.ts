describe('verify about elements', () => {
    beforeEach(() => {
        cy.visit('/#about');
    });

    it('loads about section elements', () => {
        cy.get('[data-cy="about-title"]').should('be.visible').and('have.text', "About Me");
        cy.get('[data-cy="about-summary1"]').should('be.visible');
        cy.get('[data-cy="about-summary2"]').should('be.visible');
        cy.get('[data-cy="about-summary3"]').should('be.visible');
        cy.get('[data-cy="about-summary4"]').should('be.visible');
    });
})