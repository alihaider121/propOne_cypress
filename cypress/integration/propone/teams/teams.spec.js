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

  it("Create team", function () {
    cy.url().should("include", "admin/dashboard");
    // console.log(Cypress.config());
    cy.visit("/teams", { failOnStatusCode: false }).wait(2000);
    cy.xpath("//button[normalize-space()='Add Team']").click();
    cy.xpath("//div[@class='modal-header']").should("have.text", "Add Team");
    cy.xpath("//input[@placeholder='Enter Name']").type("new team");
    //selecting city
    cy.xpath("//div[@class='col-sm-7']//div[contains(@class,'css-nwjfc')]")
      .click()
      .xpath(
        "//body/div/div/div[@role='dialog']/div[@role='document']/div[@class='modal-content']/div[@class='modal-body']/form[@class='form theme-form db__form-main']/div[@class='container']/div[@class='m-b-25']/div[2]"
      )
      .contains("Canillo")
      .click()
      .wait(2000);
    //selecting members
    cy.xpath(
      "//div[@class='select__value-container select__value-container--is-multi css-44wd1x']//div[@class='select__input-container css-nwjfc']"
    )
      .type("Saad Munir{enter}Abid Ali{enter}")
      .wait(2000);
    //selecting team lead
    cy.xpath(
      "//div[@class='select__value-container css-44wd1x']//div[@class='select__input-container css-nwjfc']"
    )
      .type("Saad Munir")
      .wait(2000);
    //desciption
    cy.xpath("//textarea[contains(@class,'form-control')]").type(
      "it testing 3ey3jsdbfbdmfnb"
    );
    //submitting form
    cy.contains("Save").click();
  });
  it.only("active and inactive teams", function () {
    cy.url().should("include", "admin/dashboard");
    // console.log(Cypress.config());
    cy.visit("/teams", { failOnStatusCode: false }).wait(2000);
    // var i = 0;
    cy.get(".rdt_TableBody");
    for (var i = 0; i < 7; i++) {
      cy.get("#row-" + i).then((row) => {
        row.toArray().forEach((element) => {
          // i++;
          cy.log(element);
          if (element.textContent.includes("Active")) {
            cy.log("active");
            element.querySelector(".table__action-icon").click();
            // .click({ force: true });
            cy.xpath("//div[@class='modal-content']").should("be.visible");
            cy.get(".btn-primary")
              .contains("Confirm")
              .click({
                force: true,
              })
              .wait(2000);
          } else if (element.textContent.includes("Inactive")) {
            cy.log("inactive");
            element.querySelector(".table__action-icon").click();
            // .click({ force: true });
            // cy.xpath("//div[@class='sc-dlVxhl hXiGDe']//button[1]")
            //   .first()
            //   .click({ force: true });
            cy.xpath("//div[@class='modal-content']").should("be.visible");
            cy.get(".btn-primary")
              .contains("Confirm")
              .click({
                force: true,
              })
              .wait(2000);
            //
            // }
          }
        });
        // });
      });
    }
  });
  // }
});

// });
