import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardComponent {
  @Input({ required: true }) title: string | undefined;
  @Output() cardClicked = new EventEmitter<boolean>();
  public isActive = false;

  public clicked(): void {
    this.isActive = !this.isActive;
    this.cardClicked.emit(this.isActive);
  }
}
