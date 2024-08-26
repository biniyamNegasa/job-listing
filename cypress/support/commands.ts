/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("login", () => {
  cy.get('input[name="email"]').type("jabixa1394@eixdeal.com");
  cy.get('input[name="password"]').type("joblisting");

  cy.contains("button", "Login").click();
});

Cypress.Commands.add("home", () => {
    cy.intercept("GET", "/api/auth/session").as("fetchData");
    cy.intercept("GET", "https://akil-backend.onrender.com/bookmarks").as(
      "bookmark"
    );
    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search"
    ).as("opportunities");

    cy.visit("/");
    cy.wait("@fetchData");
    cy.wait("@opportunities");
    cy.wait("@bookmark");
})