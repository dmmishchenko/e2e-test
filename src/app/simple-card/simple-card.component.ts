import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardComponent {
  public isActive = false;

  public clicked(): void {
    this.isActive = !this.isActive;
  }
}
