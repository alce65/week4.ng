import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnPushComponent } from './components/on-push/on-push.component';
import { OnPushSignalComponent } from './components/on-push-signal/on-push-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnPushComponent, OnPushSignalComponent],
  template: `
    <header>
      <h1>{{ title }} - {{ childValue }}</h1>
    </header>
    <app-on-push></app-on-push>
    <app-on-push-signal
      [value]="22"
      (eventClick)="onEventClick($event)"
    ></app-on-push-signal>
    <router-outlet />
  `,

  styles: ``,
})
export class AppComponent {
  title = 'Signals';
  childValue = 0;

  onEventClick(event: number) {
    this.childValue = event;
  }
}
