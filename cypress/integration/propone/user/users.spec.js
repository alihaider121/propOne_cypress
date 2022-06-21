/* <reference types="cypress" />; */
import LoginPage from "../../PageObject/login";
var maxUsers = 0;
describe("User realted test cases", function () {
  const LP = new LoginPage();

  // before(function () {});
  beforeEach(function () {
    LP.visit();
    LP.fillEmail("admin@zd.com");
    LP.fillPassword("propone@zeedee");
    LP.submit();
    cy.wait(4000).url().should("include", "admin/dashboard");
  });

  it("Make user inactive", function () {
    cy.url().should("include", "admin/dashboard");
    // console.log(Cypress.config());
    cy.visit("/users", { failOnStatusCode: false }).wait(2000);
    cy.xpath("//input[@placeholder='Name']")
      .type("Saad Munir{enter}")
      .wait(3000);
    cy.get(".rdt_TableRow")
      .get("#row-0")
      .get(".badge-status")
      .should("have.text", "Active")
      .then(function ($elem) {
        // console.log($elem.xpath("//div[@class='sc-dlVxhl hXiGDe']//button[1]"));
        cy.xpath("//div[@class='sc-dlVxhl hXiGDe']//button[1]")
          .first()
          .click({ force: true });
      });
    cy.xpath("//div[@class='modal-content']").should("be.visible");
    cy.xpath("//button[normalize-space()='Done']").click({ force: true });
  });
});
