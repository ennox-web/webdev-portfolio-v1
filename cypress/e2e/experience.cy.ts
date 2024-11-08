describe("verify experience elements", () => {
    beforeEach(() => {
        cy.visit("/#about");
        cy.get('[data-cy="menu-link-experience"]').click();
    });

    it("loads experience section elements", () => {
        cy.get('[data-cy="experience-title"]')
            .should("be.visible")
            .and("have.text", "Experience");
        cy.get('[data-cy="Software Engineer II-dates"]').should("be.visible");
        cy.get('[data-cy="Software Engineer II-company"]').should("be.visible");
        cy.get('[data-cy="Software Engineer II-title"]').should("be.visible");
        cy.get('[data-cy="Software Engineer II-description"]').should(
            "be.visible",
        );

        cy.get('[data-cy="Backend Engineer-dates"]').scrollIntoView();
        cy.get('[data-cy="Backend Engineer-dates"]').should("be.visible");
        cy.get('[data-cy="Backend Engineer-company"]').should("be.visible");
        cy.get('[data-cy="Backend Engineer-title"]').should("be.visible");
        cy.get('[data-cy="Backend Engineer-description"]').should("be.visible");

        cy.get('[data-cy="Junior SDET-dates"]').scrollIntoView();
        cy.get('[data-cy="Junior SDET-dates"]').should("be.visible");
        cy.get('[data-cy="Junior SDET-company"]').should("be.visible");
        cy.get('[data-cy="Junior SDET-title"]').should("be.visible");
        cy.get('[data-cy="Junior SDET-description"]').should("be.visible");
    });
});
