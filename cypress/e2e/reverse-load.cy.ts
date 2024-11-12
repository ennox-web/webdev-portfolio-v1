describe("verify scrolling reveals elements", () => {
    beforeEach(() => {
        cy.visit("/#projects");
        // cy.get('[data-cy="menu-link-projects"]').click();
    });

    it("loads elements when scrolling from bottom", () => {
        cy.get('[data-cy="projects-title"]')
            .first()
            .scrollIntoView()
            .should("be.visible");

        cy.get('[data-cy="Junior SDET-dates"]').scrollIntoView();
        cy.get('[data-cy="Junior SDET-description"]').should("be.visible");
        cy.get('[data-cy="Junior SDET-dates"]').should("be.visible");
        cy.get('[data-cy="Junior SDET-company"]').should("be.visible");
        cy.get('[data-cy="Junior SDET-title"]').should("be.visible");
    });
});
