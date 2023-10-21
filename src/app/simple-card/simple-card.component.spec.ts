import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCardComponent } from './simple-card.component';
import { ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SimpleCardComponent', () => {
  let component: SimpleCardComponent;
  let fixture: ComponentFixture<SimpleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleCardComponent],
    });
    fixture = TestBed.createComponent(SimpleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the "active" class when the item is active', () => {
    component.isActive = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.classes['active']).toBe(true);
  });

  it('should call clicked method when the button is clicked', () => {
    spyOn(component, 'clicked');
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);
    expect(component.clicked).toHaveBeenCalled();
  });

  it('should toggle the item selected property when clicked method is called', () => {
    component.isActive = false;
    component.clicked();
    expect(component.isActive).toBe(true);
    component.clicked();
    expect(component.isActive).toBe(false);
  });

  it('should emit output value', () => {
    const emittedValue = !component.isActive;
    const emitter = fixture.componentInstance.cardClicked;

    spyOn(emitter, 'emit');
    component.clicked();
    expect(emitter.emit).toHaveBeenCalledWith(emittedValue);
  });
});
