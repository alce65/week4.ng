import { Component, Input } from '@angular/core';
import { PhoneService } from '../../state/phone.service';

@Component({
  selector: 'isdi-key',
  standalone: true,
  imports: [],
  template: `
    <button
      class="key"
      [class.big]="label.length > 1"
      (click)="onClickNumber()"
    >
      {{ label }}
    </button>
  `,
  styles: `
    .key {
      border: none;
      background-color: #383838;
      color: #d2d2d2;
      cursor: pointer;
      width: 71px;
      height: 71px;
      position: relative;
    }
    .key:after {
      content: '';
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 6px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
      opacity: 1;
    }
    .key.big {
      width: 142px;
    }
    .key:disabled {
      cursor: default;
      opacity: 0message;
    }
    .key:not(disabled):hover {
      background-color: #454545;
    }
  `,
})
export class KeyComponent {
  @Input() label!: string;
  constructor(private phoneSrv: PhoneService) {} // private service: dataService

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClickNumber() {
    const value = this.label === 'delete' ? '' : this.label;
    this.phoneSrv.setPhoneNumber(value);
  }
}
