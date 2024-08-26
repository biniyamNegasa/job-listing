describe("first test", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/auth/session").as("fetchData");
    cy.intercept("GET", "https://akil-backend.onrender.com/bookmarks").as(
      "bookmark"
    );
    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search"
    ).as("opportunities");
    cy.home();
    cy.contains("button", "Signin").click();

    cy.wait(4000);
    cy.url().should("include", "/SignIn");

    cy.login();

    cy.wait("@opportunities");
    cy.wait("@bookmark");
    cy.url().should("include", "/");
    cy.wait(5000);
  });

  it("Navigates to bookmarks", () => {
    cy.contains("button", "Bookmarks").click();
    cy.wait("@bookmark");
    cy.url().should("include", "/Bookmarks");
  });

  it("Bookmarks a card", () => {
    cy.get("[data-testid=bookmark-button-657063e2144042c215319530]").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Bookmark created successfully");
    });
  });
  it("Unbookmarks a card", () => {
    cy.get("[data-testid=bookmark-button-657063e2144042c215319530]").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Bookmark deleted successfully");
    });
  });
});
