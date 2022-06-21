class LoginPage {
  visit() {
    cy.visit("/login");
  }

  getEmailError() {
    return cy.get(`[data-testid=SignInEmailError]`);
  }

  getPasswordError() {
    return cy.get(`[data-testid=SignInPasswordError]`);
  }

  fillEmail(value) {
    const email = cy.xpath("//input[@placeholder='Enter email']");
    email.clear();
    email.type(value);

    return this;
  }

  fillPassword(password) {
    const field = cy.xpath("//input[@placeholder='Enter Password']");
    field.clear();
    field.type(password);

    return this;
  }

  submit() {
    const button = cy.get(".btn");
    button.click();
  }
}

export default LoginPage;
