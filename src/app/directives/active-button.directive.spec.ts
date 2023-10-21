import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActiveButtonDirective } from './active-button.directive';

@Component({
  template: '<button [disabled]="disabled" class="active"></button>',
})
class TestComponent {
  disabled = false;
}

describe('ActiveButtonDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveButtonDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should apply the style to the button element', () => {
    const buttonElement = fixture.nativeElement.querySelector('button.active');
    expect(buttonElement.style.borderColor).toBe('blue');
  });

  it('should apply the style to the button element', () => {
    const buttonElement = fixture.nativeElement.querySelector('button.active');

    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    
    expect(buttonElement.style.borderColor).not.toBe('blue');
  });
});
