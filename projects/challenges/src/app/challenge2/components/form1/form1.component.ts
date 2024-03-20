import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { State } from '../app-forms/app-forms.component';
import { PersonalData, User } from '../../model/user';

@Component({
  selector: 'isdi-form1',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h3>Personal data</h3>
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name" />
      <input type="text" placeholder="Last name" formControlName="lastName" />
      <input type="email" placeholder="Email" formControlName="email" />
      <input type="date" placeholder="BirthDate" formControlName="birthDate" />
      <p>Edad:</p>
      <fieldset>
        <legend>Genero</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            formControlName="gender"
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            formControlName="gender"
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            formControlName="gender"
          />
          Other
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="none"
            formControlName="gender"
          />
          Prefer not to mention
        </label>
      </fieldset>
      <label>
        <input type="checkbox" formControlName="hasNewsletter" />
        Desea recibir información de nuestra newsletter?
      </label>
      <div>
        <button type="submit" [disabled]="formGroup.invalid">Next</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class Form1Component implements OnInit {
  formGroup!: FormGroup;
  @Input({
    required: true,
  })
  initialUser!: Partial<User>;
  @Output() changeStep: EventEmitter<State> = new EventEmitter();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [this.initialUser.name],
      lastName: [this.initialUser.lastName],
      email: [this.initialUser.email],
      birthDate: [this.initialUser.birthDate],
      gender: [this.initialUser.gender],
      hasNewsletter: [this.initialUser.hasNewsletter],
    });
  }

  onSubmit() {
    const userData: PersonalData = this.formGroup.value;
    console.log(userData);
    this.changeStep.emit({ step: 2, userData });
  }
}
