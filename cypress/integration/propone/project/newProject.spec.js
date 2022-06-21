// import cypress from "cypress";
// import { before } from "cypress/types/lodash";
import LoginPage from "../../PageObject/login";
describe("Example to demonstrate the use each in Cypress", function () {
  const LP = new LoginPage();

  beforeEach(function () {
    LP.visit();
    LP.fillEmail("admin@zd.com");
    LP.fillPassword("propone@zeedee");
    LP.submit();
    cy.wait(4000).url().should("include", "admin/dashboard");
  });

  it("Visit the project listing page", function () {
    cy.visit("/projects", { failOnStatusCode: false }).wait(2000);
    cy.url().should("include", "admin/projects");
    cy.xpath(
      "//button[@class='btn btn-primary btn-lg btn-pill btn-wide']"
    ).click({ force: true });
    cy.url().should("include", "projects/new");
    //add project modal
    cy.xpath('//input[@placeholder="Please enter name"]').type("testing pro");
    //
    cy.xpath('//input[@placeholder="Enter short name"]').type("TPP");

    cy.xpath('//input[@placeholder="Enter email"]').type(
      "ali.haider8095@gmail.com"
    );
    cy.get(".PhoneInputInput").type("3214399862");

    cy.xpath("//div[@class='select__input-container css-nwjfc']").click();
    cy.get("select").select("Pakistan");
    // cy.contains("Pakistan").click({force: true});

    const fixtureFile = "image.png";
    cy.get("input[type=file]").attachFile(fixtureFile);
  });
});
