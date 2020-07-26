import 'cypress-localstorage-commands';
import { JS_ELEMENTS } from './jsElements';

Cypress.Commands.add('login', (email, password) => {
  cy.get(JS_ELEMENTS.emailInput)
    .clear()
    .type(email);
  cy.get(JS_ELEMENTS.passwordInput)
    .clear()
    .type(password);
  cy.get(JS_ELEMENTS.loginButton)
    .click();
});
