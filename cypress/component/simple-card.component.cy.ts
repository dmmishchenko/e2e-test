import { Component } from '@angular/core';
import { SimpleCardComponent } from '../../src/app/simple-card/simple-card.component';

@Component({
  template: ` <app-simple-card></app-simple-card> `,
})
class WrapperComponent {}

describe('SimpleCardComponent', () => {
  it('can mount using WrapperComponent', () => {
    cy.mount(WrapperComponent, {
      declarations: [SimpleCardComponent],
    });

    cy.get('button').should('be.visible');
  });

  it('can mount using template syntax', () => {
    cy.mount('<app-simple-card></app-simple-card>', {
      declarations: [SimpleCardComponent],
    });
    cy.get('button').should('be.visible');
  });

  it('when button is clicked, should apply active class ', () => {
    cy.mount(WrapperComponent, {
      declarations: [SimpleCardComponent],
    });
    cy.get('button').should('not.have.class', 'active');
    cy.get('button').click();
    cy.get('button').should('have.class', 'active');
  });
});
