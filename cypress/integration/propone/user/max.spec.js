describe("Example to demonstrate the use each in Cypress", function () {
  before(function () {
    cy.visit("https://staging-zd.propone.pk/admin/login");
  });

  beforeEach(function () {
    cy.fixture("testData").then(function (testdata) {
      this.testdata = testdata;
    });
  });

  it("Find Max of values ", function () {
    cy.get(":nth-child(1) > div > .form-control").type(this.testdata.email);
    cy.get(".has-icon > .form-control").type(this.testdata.password);
    cy.get(".btn")
      .click()
      .wait(10000)
      .then(() => {
        cy.get('select[name="select"]')
          .first()
          .children(1)
          .each((listItem, index) => {
            const listNames = listItem.text().trim();
            if (listNames == "Zameen Quadrangle") {
              cy.get("option")
                .click({ multiple: true, force: true })
                // .wait(3000);
            }

            // cy.log(listNames + " : " + index.toString);
            // index.each((pos, pos2) => {
            //   pos2.select(i);
            // });
            // console.log(listNames);
          });
      });
  });
});
