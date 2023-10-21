import { Component } from '@angular/core';
import { ActiveButtonDirective } from '../../src/app/directives/active-button.directive';

@Component({
  template: `<button [disabled]="disabled" class="active"></button>`,
})
class WrapperComponent {
  disabled = false;
}

describe('Active Button Directive Test', () => {
  it('should apply the directive styling', () => {
    cy.mount('<button class="active"></button>', {
      declarations: [ActiveButtonDirective],
    });

    // Interact with the button that should have the directive applied
    cy.get('button.active').should(
      'have.css',
      'border-color',
      'rgb(0, 0, 255)'
    );
  });

  it('should not apply to button the directive styling', () => {
    cy.mount(WrapperComponent, {
      declarations: [ActiveButtonDirective],
    }).then((response) => {
      // Check for 'blue'
      cy.get('button.active').should(
        'have.css',
        'border-color',
        'rgb(0, 0, 255)'
      );

      response.component.disabled = true;

      // Verify that the border color is reset when the button is disabled
      cy.get('button.active').should(
        'not.have.css',
        'border-color',
        'rgb(0, 0, 255)'
      );
    });
  });
});
