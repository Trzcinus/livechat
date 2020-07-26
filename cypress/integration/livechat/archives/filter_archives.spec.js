import { JS_ELEMENTS } from '../../../support/jsElements';
import { LOGIN } from '../../../support/loginData';

context('livechat archives filter testing', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/archives/');
    cy.login(LOGIN.email, LOGIN.password);
  });

  it('should show only agent 007 chat by filtering', () => {
    cy.get(JS_ELEMENTS.addFilterButton)
      .should('be.visible')
      .click();
    cy.get(JS_ELEMENTS.addFilterList)
      .contains('Agent')
      .click();
    cy.get('[title="Agent 007"]')
      .click();
    cy.get(JS_ELEMENTS.FilterActive)
      .contains('Agent 007')
      cy.get('#archive-item-PX0M8WV65I')
        .should('be.visible')
  });

  it('should filter to date 10 sep 2019', () => {
    cy.get(JS_ELEMENTS.addFilterButton)
      .should('be.visible')
      .click();
    cy.get(JS_ELEMENTS.addFilterList)
      .contains('Date')
      .click();
    cy.get(JS_ELEMENTS.FilterDateCustom)
      .click()
    cy.get(JS_ELEMENTS.DateFrom)
      .clear()
      .type('2019-09-10')
      cy.get(JS_ELEMENTS.DateTo)
      .clear()
      .type('2019-09-10')
      cy.get('.title')
        .contains('10 Sep 2019 - 10 Sep 2019')
      cy.get('#archive-item-Q10R0Z1GJ1')
      .should('not.be.visible')
      cy.get('#archive-item-PX0M84HFF9')
      .should('be.visible')
      cy.get('#archive-item-PX0M8WV65I')
      .should('be.visible')
      cy.get('#archive-item-PX0M836X7O')
      .should('be.visible')
      cy.get('#archive-item-PX0M832OIL')
      .should('be.visible')           
  });

  it('should filter to date 10 sep 2019 and Agent Agent 007', () => {
    cy.get(JS_ELEMENTS.addFilterButton)
      .should('be.visible')
      .click();
    cy.get(JS_ELEMENTS.addFilterList)
      .contains('Date')
      .click();
    cy.get(JS_ELEMENTS.FilterDateCustom)
      .click()
    cy.get(JS_ELEMENTS.DateFrom)
      .clear()
      .type('2019-09-10')
      cy.get(JS_ELEMENTS.DateTo)
      .clear()
      .type('2019-09-10')
      cy.get('.title')
        .contains('10 Sep 2019 - 10 Sep 2019')
      cy.get(JS_ELEMENTS.addFilterButton)
      .should('be.visible')
      .click();
    cy.get(JS_ELEMENTS.addFilterList)
      .contains('Agent')
      .click();
    cy.get('[title="Agent 007"]')
      .click();
      cy.get('#archive-item-Q10R0Z1GJ1')
      .should('not.be.visible')
      cy.get('#archive-item-PX0M84HFF9')
      .should('not.be.visible')
      cy.get('#archive-item-PX0M8WV65I')
      .should('be.visible')
      cy.get('#archive-item-PX0M836X7O')
      .should('not.be.visible')
      cy.get('#archive-item-PX0M832OIL')
      .should('not.be.visible')           
  });
});
