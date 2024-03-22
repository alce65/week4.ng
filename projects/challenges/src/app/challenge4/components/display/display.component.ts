import { Component, inject, OnDestroy } from '@angular/core';
import { PhoneService } from '../../state/phone.service';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'isdi-display',
  standalone: true,
  imports: [AsyncPipe],

  // `<span class="number">{{ (dialed$ | async)!.phoneNumber }}</span>`,

  template: `<span class="number">{{ dialed }}</span>`,
  styles: `
    .number {
      background-color: #fff;
      color: #454545;
      padding: 5px 20px;
      width: 150px;
      border-radius: 30px;
      text-align: center;
      margin: 50px 0;
      height: 31px;
    }
  `,
})
export class DisplayComponent implements OnDestroy {
  private phoneSrv = inject(PhoneService);
  dialed$ = this.phoneSrv.getPhone();
  dialed: string = '';
  subscription: Subscription;

  constructor() {
    this.subscription = this.dialed$.subscribe(
      (data) => (this.dialed = data.phoneNumber),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
