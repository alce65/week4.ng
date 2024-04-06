import { Component, inject } from '@angular/core';
import { PhoneService } from '../../state/phone.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'isdi-info',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (phone$ | async; as phone) {
      <span class="message">{{
        phone.isCalling ? 'calling ' + phone.phoneNumber : '...'
      }}</span>
    }
  `,
  styles: ``,
})
export class InfoComponent {
  // private phoneSrv = inject(PhoneService);
  // phone$ = this.phoneSrv.getPhone();
  phone$ = inject(PhoneService).getPhone();

  constructor() {
    // this.phoneSrv
    //   .getPhone()
    //   .subscribe(
    //     (data) =>
    //       (this.message = data.isCalling
    //         ? 'calling ' + data.phoneNumber
    //         : '...'),
    //   );
  }
}
