describe("verify skill overlay", () => {
    beforeEach(() => {
        cy.visit("/#about");
        cy.get('[data-cy="menu-link-skills"]').click();
    });

    it("loads skill overlay", () => {
        cy.get('[data-cy="skill-overlay"]').should("not.be.visible");
        cy.get('[data-cy="skills-lang-chip"]').first().click();
        cy.get('[data-cy="skill-overlay"]').should("be.visible");
        cy.get('[data-cy="Junior SDET-company"]').should("be.visible");
        cy.get(
            '[data-cy="projects-PlayStation Devkit Streaming Automated Tests-title"]',
        )
            .last()
            .scrollIntoView()
            .should("be.visible");
    });

    it("close skill overlay via background", () => {
        cy.get('[data-cy="skill-overlay"]').should("not.be.visible");
        cy.get('[data-cy="skills-lang-chip"]').first().click();
        cy.get('[data-cy="skill-overlay"]').should("be.visible");
        cy.get('[data-cy="skill-overlay-bg"]').click();
        cy.get('[data-cy="skill-overlay"]').should("not.be.visible");
    });

    it("close skill overlay via button", () => {
        cy.get('[data-cy="skill-overlay"]').should("not.be.visible");
        cy.get('[data-cy="skills-lang-chip"]').first().click();
        cy.get('[data-cy="skill-overlay"]').should("be.visible");
        cy.get('[data-cy="skill-overlay-close-button"]').click();
        cy.get('[data-cy="skill-overlay"]').should("not.be.visible");
    });
});
