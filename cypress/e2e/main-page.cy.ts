describe('main banner elements', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('loads main banner', () => {
        cy.get('[data-cy="banner-logo"]').should('be.visible');
        cy.get('[data-cy="starry-canvas"]').wait(600).then((canvasObj) => {
            var width = canvasObj.prop("width");
            var height = canvasObj.prop("height");
            expect(width).to.equal(Cypress.config().viewportWidth);
            expect(height).to.equal(Cypress.config().viewportHeight);
        })
    });
});