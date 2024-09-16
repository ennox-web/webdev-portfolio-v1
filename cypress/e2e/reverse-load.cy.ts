describe('verify scrolling reveals elements', () => {
    beforeEach(() => {
        cy.visit('/#projects');
        // cy.get('[data-cy="menu-link-projects"]').click();
    });

    it('loads elements when scrolling from bottom', () => {
        cy.get('[data-cy="projects-title"]').scrollIntoView().should('be.visible');
    });
});