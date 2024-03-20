import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type LogoOptions = {
  side?: string;
  highColor?: string;
  lowColor?: string;
};

@Component({
  selector: 'isdi-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.svg',
  styles: `
    :host {
      display: inline-block;
    }
  `,
})
export class LogoComponent implements OnInit {
  @Input() options!: LogoOptions;
  @Output() logoClick: EventEmitter<string>;

  constructor() {
    this.logoClick = new EventEmitter();
  }
  ngOnInit(): void {
    this.options = {
      side: '25rem',
      highColor: 'white',
      lowColor: 'black',
      ...this.options,
    };
  }

  onClick(path: string) {
    this.logoClick.next(path);
  }
}
