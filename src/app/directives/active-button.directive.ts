import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'button.active',
})
export class ActiveButtonDirective implements OnChanges {
  @Input() disabled: boolean = false;

  constructor(private el: ElementRef<HTMLButtonElement>) {
    this.updateBorderColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('disabled' in changes) {
      this.updateBorderColor();
    }
  }

  private updateBorderColor() {
    if (!this.disabled) {
      this.el.nativeElement.style.borderColor = 'blue';
    } else {
      this.el.nativeElement.style.borderColor = ''; // Reset the border color
    }
  }
}
