import { Component } from '@angular/core';
import { Form1Component } from '../form1/form1.component';
import { Form2Component } from '../form2/form2.component';
import { JsonPipe } from '@angular/common';
import { User } from '../../model/user';

export type State = {
  step: number;
  userData: Partial<User>;
};

@Component({
  selector: 'isdi-app-forms',
  standalone: true,
  imports: [Form1Component, Form2Component, JsonPipe],
  template: `
    @switch (state.step) {
      @case (1) {
        <isdi-form1
          [initialUser]="this.state.userData"
          (changeStep)="setStep1($event)"
        ></isdi-form1>
      }
      @case (2) {
        <isdi-form2 (changeStep)="setStep2($event)"></isdi-form2>
      }
      @case (3) {
        <div>Confirmación</div>
        <pre>
          {{ state.userData | json }}
        </pre
        >
        <div>
          <button (click)="setStep(-1)">Prev</button>
          <button (click)="setStep(+1)">Confirmar</button>
        </div>
      }
      @case (4) {
        <div>Login</div>
        <pre>
          - Username
          - Password
        </pre
        >
        <div>
          <button (click)="setStep(-1)">Prev</button>
          <button (click)="setStep(+1)">Login</button>
        </div>
      }
      @default {
        <div>form Final</div>
        <pre>
        Si los datos son incorrectos, se debe de mostrar un mensaje de error. Si
        son correctos, se le debe mostrar una pantalla con todos los datos
        introducidos en el formulario (sería como un cuarto paso). Contraer
        </pre
        >
      }
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AppFormsComponent {
  state: State = {
    step: 1,
    userData: {
      name: '',
      lastName: '',
      birthDate: '',
      email: '',
      gender: '',
      hasNewsletter: false,
      username: '',
      password: '',
      repeatPassword: '',
      accountType: 'personal',
    },
  };

  setStep1(value: { step: number; userData: Partial<User> }) {
    this.state.step = value.step;
    this.state.userData = { ...this.state.userData, ...value.userData };
    console.log(this.state);
  }

  setStep2(value: { step: number; userData: Partial<User> }) {
    this.state.step = value.step;
    if (value.step === 3) {
      this.state.userData = { ...this.state.userData, ...value.userData };
    }
    console.log(this.state);
  }

  setStep(value: number) {
    this.state.step += value;
  }
}
