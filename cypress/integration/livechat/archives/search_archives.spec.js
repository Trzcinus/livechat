import { JS_ELEMENTS } from '../../../support/jsElements';

context('livechat archives search testing', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/archives/');
    cy.login('m.debski+frontend_tests@livechatinc.com','test1@3$');
  });

  it('should find Client no1 chat and hide other matches', () => {
    cy.get(JS_ELEMENTS.searchInput)
      .clear()
      .type('Client no1');
    cy.contains('Client no1')
      .should('be.visible');
    cy.contains('Client no2')
      .should('not.be.visible');
  });
  
  it('should show all chats', () => {
    cy.contains('Client no1')
      .should('be.visible');
    cy.contains('Client no2')
      .should('be.visible');
    cy.contains('Client no3')
      .should('be.visible');
    cy.contains('vv')
      .should('be.visible');
    cy.contains('Yeet')
      .should('be.visible');
  });

  it('should show chat cotaining "Hello. How may I help you?', () => {
    cy.get(JS_ELEMENTS.searchInput)
      .clear()
      .type('Hello. How may I help you?');
    cy.contains('Hello. How may I help you?')
      .should('be.visible')
  });
    
  it('should show chat cotaining "#$@$#@" then remove search text', () => {
    cy.get(JS_ELEMENTS.searchInput)
      .clear()
      .type('#$@$#@');
    cy.contains('#$@$#@')
      .should('not.be.visible')
    cy.get('[title=Clear]')
      .click()
    cy.get(JS_ELEMENTS.searchInput)
      .should('be.visible')
  });
});
