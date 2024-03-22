import { Component, Input } from '@angular/core';
import { PhoneService } from '../../state/phone.service';

@Component({
  selector: 'isdi-action',
  standalone: true,
  imports: [],
  template: `
    <button
      [class]="label.toLowerCase()"
      [class.active]="isActive"
      [disabled]="!isActive"
      (click)="onClick()"
    >
      {{ label }}
    </button>
  `,
  styles: `
    button {
      border-radius: 10px;
      padding: 20px;
      text-decoration: none;
      color: inherit;
      cursor: default;
      opacity: 0.5;
      transform: scale(0.9);
      transition: all 0.2s ease-out;
    }
    .active {
      cursor: pointer;
      opacity: 1;
    }
    a.active:hover {
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
export class ActionComponent {
  @Input({ required: true }) label!: 'Hang' | 'Call';
  isActive!: boolean;

  constructor(private phoneSrv: PhoneService) {
    this.phoneSrv.getPhone().subscribe((phone) => {
      switch (this.label) {
        case 'Call':
          this.isActive = !phone.isCalling;
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
