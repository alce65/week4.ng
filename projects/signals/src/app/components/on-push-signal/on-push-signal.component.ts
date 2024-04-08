import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-on-push-signal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Esto es un contador con Signals</p>
    <p>Signal Count is {{ counterSignal() }}</p>
    <p>Signal Count percent is {{ counterPercent() }}</p>
  `,
  styles: `
    :host {
      display: block;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 1rem;
    }
  `,
})
export class OnPushSignalComponent implements OnInit, OnDestroy {
  value = input.required<number>();
  counterSignal = signal(0);
  eventClick = output<number>();
  counterPercent = computed(() => this.counterSignal() / 100);
  // readOnlyCounter = computed(() => this.counterSignal());
  readOnlyCounter = this.counterSignal.asReadonly();
  interval!: Subscription;

  constructor() {
    effect(() => {
      console.log('Signal value', this.counterSignal());
    });
  }

  ngOnInit(): void {
    this.interval = interval(500).subscribe(() => {
      this.counterSignal.update(() => this.counterSignal() + 1);
    });
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }

  @HostListener('click') onClickComponent() {
    console.log('Click on component');
    this.eventClick.emit(this.counterSignal());
  }
}
