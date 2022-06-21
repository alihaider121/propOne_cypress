describe("Example to demonstrate the use each in Cypress", function () {
  beforeEach(function () {
    cy.visit("/login");
    cy.get(":nth-child(1) > div > .form-control").type(Cypress.env("email"));
    cy.get(".has-icon > .form-control").type(Cypress.env("password"));
    cy.get(".btn").click();
  });

  it("Visit the project listing page", function () {
    cy.url().should("include", "admin/dashboard");
    // console.log(Cypress.config());
    cy.visit("/payments", { failOnStatusCode: false }).wait(2000);
    cy.url().should("include", "payments");
    cy.xpath(
      "//button[@class='btn btn-primary btn-lg btn-pill btn-wide']"
    ).click({ force: true });
    cy.url().should("include", "payments/new");
    //add project modal
    cy.xpath('//input[@placeholder="Enter Payment Amount"]').type("20000");
    //
    cy.xpath('//input[@placeholder="Select Deposit Date"]').click().wait(2000);
    // cy.contains("Pakistan").click();

    cy.xpath('//input[@placeholder="Enter email"]').type(
      "ali.haider8095@gmail.com"
    );
    cy.get(".PhoneInputInput").type("3214399862");

    cy.xpath("//div[@class='select__input-container css-nwjfc']").click();
    //   .children(0)
    //   //   .get(".react-select-2-input")
    //   .select("Pakistan");

    const fixtureFile = "image.png";
    cy.get("input[type=file]").attachFile(fixtureFile);
  });
});
