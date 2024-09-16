describe('verify menu elements', () => {
    beforeEach(() => {
        cy.visit('/#about');
    });

    it('loads menu', () => {
        cy.get('[data-cy="menu-full-name').should('have.text', "Emily Nox");
        cy.get('[data-cy="menu-job-position"]').should('have.text', "Software Engineer");
        cy.get('[data-cy="menu-job-sub1"]').should('have.text', "Frontend");
        cy.get('[data-cy="menu-job-sub2"]').should('have.text', "Backend");
        cy.get('[data-cy="menu-job-sub3"]').should('have.text', "Full Stack");

        cy.get('[data-cy="menu-summary"]').should('be.visible');

        cy.get('[data-cy="menu-link-about"]').should('be.visible');
        cy.get('[data-cy="menu-link-skills"]').should('be.visible');
        cy.get('[data-cy="menu-link-experience"]').should('be.visible');
        cy.get('[data-cy="menu-link-projects"]').should('be.visible');

        cy.get('[data-cy="socials-linkedin"]').should('be.visible').and('have.attr', 'href', 'https://www.linkedin.com/in/ennox/' );
        cy.get('[data-cy="socials-github"]').should('be.visible').and('have.attr', 'href', 'https://github.com/ennox-web');
    });

    it('verifies menu links', () => {
        cy.get('[data-cy="menu-link-skills"]').click()
        cy.get('[data-cy="skills-title-lang"]');

        cy.get('[data-cy="menu-link-experience"]').click();
        cy.get('[data-cy="experience-title"]').should('be.visible');

        cy.get('[data-cy="menu-link-projects"]').click();
        cy.get('[data-cy="projects-title"]').should('be.visible');
    });
});