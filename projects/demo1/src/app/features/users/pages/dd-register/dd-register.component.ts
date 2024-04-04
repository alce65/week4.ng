import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'isdi-dd-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './dd-register.component.html',
  styles: ``,
})
export default class DdRegisterComponent {
  formGroup: FormGroup;
  constructor(private fB: FormBuilder) {
    this.formGroup = this.fB.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      password: [''],
    });
  }
}
