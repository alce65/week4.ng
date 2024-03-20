import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-footer',
  standalone: true,
  imports: [DatePipe],
  template: `
    <footer>
      <address>{{ brand }}</address>
      <p>{{ toDay | date: 'fullDate' }}</p>
    </footer>
  `,
  styles: `
    footer {
      background-color: #f8f9fa;
      border-top: 1px solid #e7e7e7;
      padding: 10px 0;
      text-align: center;
    }
  `,
})
export class FooterComponent {
  @Input({ required: true }) brand: string = '';
  toDay = new Date();
}
