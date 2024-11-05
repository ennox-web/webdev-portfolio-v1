describe("verify skills elements", () => {
  beforeEach(() => {
    cy.visit("/#about");
    cy.get('[data-cy="menu-link-skills"]').click();
  });

  it("loads skills section elements", () => {
    cy.get('[data-cy="skills-title-lang"]')
      .should("be.visible")
      .and("have.text", "Languages");
    cy.get('[data-cy="skills-lang-chip"]').should("be.length", 6);

    cy.get('[data-cy="skills-title-tech"]')
      .should("be.visible")
      .and("have.text", "Technical");
    cy.get('[data-cy="skills-tech-chip"]').should("be.length", 14);

    cy.get('[data-cy="skills-title-devop"]').scrollIntoView();
    cy.get('[data-cy="skills-title-devop"]')
      .should("be.visible")
      .and("have.text", "DevOps");
    cy.get('[data-cy="skills-devop-chip"]').should("be.length", 3);

    cy.get('[data-cy="skills-title-testauto"]').scrollIntoView();
    cy.get('[data-cy="skills-title-testauto"]')
      .should("be.visible")
      .and("have.text", "Test Automation");
    cy.get('[data-cy="skills-testauto-chip"]').should("be.length", 6);
  });
});
