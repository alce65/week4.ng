import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'isdi-td-register',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './td-register.component.html',
  styles: `
    .control {
      padding: 0.5rem 0;
    }
  `,
})
export default class TdRegisterComponent implements OnInit {
  @ViewChild('form', {
    static: true,
  })
  form!: ElementRef;
  @ViewChild('ngForm', {
    static: true,
  })
  ngForm!: NgForm;

  ngOnInit() {
    console.dir(this.form.nativeElement);
    console.dir(this.ngForm);
  }

  onSubmit(ev: Event) {
    console.log(ev);
    console.log(this.ngForm.value);
  }

  foo() {
    console.log('foo');
  }
}
