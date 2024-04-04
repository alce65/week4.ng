import { Component, Input, OnInit } from '@angular/core';
import { PhoneService } from '../../state/phone.service';

@Component({
  selector: 'isdi-action',
  standalone: true,
  imports: [],
  template: `
    <button
      [class]="label.toLowerCase()"
      [class.active]="isActive"
      [disabled]="isDisabled"
      [hidden]="!isActive"
      (click)="onClick()"
    >
      {{ label }}
    </button>
  `,
  styles: `
    :host {
      display: block;
    }
    button {
      border-radius: 10px;
      padding: 20px;
      width: 6rem;
      text-decoration: none;
      color: inherit;
      cursor: default;
      opacity: 0.5;
      transform: scale(0.9);
      transition: all 0.2s ease-out;
    }
    .active:not(:disabled) {
      cursor: pointer;
      opacity: 1;
    }
    .active:not(:disabled):hover {
      transform: scale(1);
    }
    .call {
      background-color: #00886a;
    }
    .hang {
      background-color: #b6002e;
    }
  `,
})
export class ActionComponent implements OnInit {
  @Input({ required: true }) label!: 'Hang' | 'Call';
  isActive!: boolean;
  isDisabled: boolean = false;

  constructor(private phoneSrv: PhoneService) {}

  ngOnInit(): void {
    this.phoneSrv.getPhone().subscribe((phone) => {
      switch (this.label) {
        case 'Call':
          this.isActive = !phone.isCalling;
          this.isDisabled = phone.phoneNumber.length < 3;
          break;

        case 'Hang':
          this.isActive = phone.isCalling;
          break;
      }
    });
  }

  onClick() {
    this.phoneSrv.changeCalling();
  }
}
