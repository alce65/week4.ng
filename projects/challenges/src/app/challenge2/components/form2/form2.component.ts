import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { State } from '../app-forms/app-forms.component';

@Component({
  selector: 'isdi-form2',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h3>Access data</h3>
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Username" formControlName="username" />
      <input
        [type]="isPasswordVisible ? 'text' : 'password'"
        placeholder="Password"
        formControlName="password"
      />
      <button type="button" (click)="isPasswordVisible = !isPasswordVisible">
        {{ isPasswordVisible ? 'Ocultar password' : 'Ver password' }}
      </button>
      <input
        type="password"
        placeholder="Repeat password"
        formControlName="repeatPassword"
      />
      <select formControlName="accountType">
        <option value="personal">Personal</option>
        <option value="pro">Pro</option>
        <option value="business">Business</option>
      </select>
      <div>
        <button
          (click)="
            changeStep.emit({
              step: 1,
              userData: {}
            })
          "
        >
          Prev
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class Form2Component {
  formGroup: FormGroup;
  @Output() changeStep: EventEmitter<State> = new EventEmitter();
  isPasswordVisible = false;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      username: [''],
      password: [''],
      repeatPassword: [''],
      accountType: [''],
    });
  }

  onSubmit() {
    this.changeStep.emit({ step: 3, userData: this.formGroup.value });
  }
}
