describe("Testing Wikipedia", () => {
  it("I can search for content", () => {
    cy.visit("https://www.wikipedia.org");
    cy.xpath("//input[@id='searchInput']").type("Ali haider");
    cy.xpath("//button[@type='submit']").click();
    cy.url().should("include", "/Ali_Haidar");
    cy.get("ul > li").each(($ele) => {
      if ($ele.text().toString().includes("ali")) {
        cy.log($ele.text());
        cy.get($ele).click();
      }

      //prints Home Page Hello Hi
    });
    // cy.contains("Panthera leo leo");
  });
});
