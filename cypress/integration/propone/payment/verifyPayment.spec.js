/* <reference types="cypress" />; */
import LoginPage from "../../PageObject/login";
var maxUsers = 0;
describe("payment realted test cases", function () {
  const LP = new LoginPage();

  // before(function () {});
  beforeEach(function () {
    LP.visit();
    LP.fillEmail("admin@zd.com");
    LP.fillPassword("propone@zeedee");
    LP.submit();
    cy.wait(4000).url().should("include", "admin/dashboard");
  });

  it("verify the firstly find payment", function () {
    cy.url().should("include", "admin/dashboard");
    // console.log(Cypress.config());
    cy.visit("/payments", { failOnStatusCode: false }).wait(4000);
    cy.get(".rdt_TableBody");
    for (var i = 0; i <= 80; i++) {
      if (i >= 20) {
        cy.xpath("//button[@id='pagination-next-page']//*[name()='svg']").click(
          { force: true }
        );
      }
      cy.get("#row-" + i).then((row) => {
        row.toArray().forEach((element) => {
          // i++;
          cy.log(element);
          if (element.textContent.includes("Received")) {
            cy.log("find received element");
            element.querySelector(".table__action-icon").click();
            // .click({ force: true });
            cy.xpath("//div[@class='modal-content']").should("be.visible");
            cy.get(".btn-primary")
              .contains("Verify")
              .click({
                force: true,
              })
              .wait(2000);

            cy.get(".modal-dialog")
              .should("be.visible")
              .contains("Add Clearance Date");

            cy.get(".btn-primary")
              .contains("Verify")
              .click({
                force: true,
              })
              .wait(2000);
            // i >= 20 ??
          }
          // return false;
          else {
            // if (i >= 20 && !element.textContent.includes("Received")) {
            //   cy.xpath(
            //     "//button[@id='pagination-next-page']//*[name()='svg']"
            //   )
            //     .click({ force: true })
            // }
          }
        });
      });
    }
  });
});
