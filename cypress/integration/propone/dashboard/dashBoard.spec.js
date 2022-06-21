import LoginPage from "../../PageObject/login";
describe("DashBoard option", function () {
  it("Visit the project listing page", function () {
    const LP = new LoginPage();
    LP.visit();
    LP.fillEmail("admin@zd.com");
    LP.fillPassword("propone@zeedee");
    LP.submit();
    cy.url().should("include", "admin/dashboard");
    //   cy.get(".d-lg-none > svg").click();
    cy.get(".onhover-dropdown").invoke("show").realHover("mouse");
    cy.contains("Users").click({ force: true });
    //   .trigger("mouseover", { force: true });
    // console.log(Cypress.config());
  });
});
