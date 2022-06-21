describe("Testing Wikipedia", () => {
  it("I can search for content", () => {
    cy.visit("https://www.cricbuzz.com/");
    cy.xpath(
      "//span[@class='cb-ico cb-search-input-icon cb-search-input-icon-nav']"
    )
      .type("Haris rauf")
      .wait(2000)
      .xpath(
        "//li[@id='search_item_0']//a[@class='text-black cb-srch-suggest-link ng-scope']"
      )
      .click();
    // cy.xpath("//button[@type='submit']").click();
    // cy.url().should("include", "/Ali_Haidar");
    // cy.get("ul > li").each(($ele) => {
    //   if ($ele.text().toString().includes("ali")) {
    //     cy.log($ele.text());
    //     cy.get($ele).click();
    //   }

    //prints Home Page Hello Hi
  });
  // cy.contains("Panthera leo leo");
  //   });
});
