import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'isdi-counters-list',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <h3>Counters-list</h3>

    <div>
      <p>Total : {{ totalCounter }}</p>
      <p>Clicks : {{ totalClicks }}</p>
    </div>

    <div class="counters-list">
      @for (item of ['A', 'B', 'C']; track $index) {
        <isdi-counter [index]="item" (countEvent)="setTotals($event)" />
      }
    </div>
  `,
  styles: ``,
})
export class CountersListComponent {
  totalCounter = 0;
  totalClicks = 0;

  setTotals(value: number) {
    this.totalCounter += value;
    this.totalClicks++;
  }
}
