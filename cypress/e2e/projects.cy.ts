describe('verify projects elements', () => {
    beforeEach(() => {
        cy.visit('/#about');
        cy.get('[data-cy="menu-link-projects"]').click();
    });

    it('loads projects section elements', () => {
        cy.get('[data-cy="projects-title"]').should('be.visible').and('have.text', "Projects");
        cy.get('[data-cy="projects-Web Portfolio v1-title').should('be.visible').and('have.text', "Web Portfolio v1");
        cy.get('[data-cy="projects-Web Portfolio v1-description').should('be.visible');
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').should('be.length', 3);


        // cy.get('[data-cy="projects-T-Rex-title')
        //     .scrollIntoView()
        //     .should('be.visible').and('have.text', "T-Rex");
        // cy.get('[data-cy="projects-T-Rex-description').should('be.visible');

        // cy.get('[data-cy="projects-PlayStation Devkit Streaming Automated Tests-title')
        //     .scrollIntoView()
        //     .should('be.visible').and('have.text', "PlayStation Devkit Streaming Automated Tests");
        // cy.get('[data-cy="projects-PlayStation Devkit Streaming Automated Tests-description').should('be.visible');
    });

    it('verify projects flipping image cards', () => {
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').eq(0).should('have.attr', 'alt', "An image of this site's main banner, a starry sky with the E.N. Nox logo");
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').eq(1).click({force:true});
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').eq(0).should('have.attr', 'alt', "An image of this site's desktop version");
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').eq(2).click({force:true});
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').eq(0).should('have.attr', 'alt', "An image of this site's mobile version");
    });

    it('verify projects image overlay', () => {
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').eq(2).click({force:true});
        cy.get('[data-cy="projects-Web Portfolio v1-image"]').eq(0).click();
        cy.get('[data-cy="image-overlay"]').should('have.attr', 'alt', "An image of this site's mobile version");
    })
});