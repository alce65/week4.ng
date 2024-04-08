import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-on-push',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Esto es un contador</p>
    <p>Count is: {{ counter }}</p>
  `,
  styles: ``,
})
export class OnPushComponent implements OnInit, OnDestroy {
  counter = 0;
  interval!: Subscription;

  ngOnInit(): void {
    this.interval = interval(500).subscribe(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    });
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }
}
