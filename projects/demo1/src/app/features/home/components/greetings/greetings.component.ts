import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-greetings',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage],
  template: `
    <p>Hola {{ user.toUpperCase() }}</p>

    <div>
      <label>
        <span>Nombre de usuario</span>
        <input type="text" name="" [(ngModel)]="user" />
      </label>
    </div>

    <img
      [height]="size"
      [width]="size"
      [ngSrc]="avatar"
      priority="low"
      alt="Avatar aleatorio"
    />

    <p>La edad es {{ age }}</p>

    <button (click)="age = age + 1">Cumple años</button>
    <button (click)="addSomeYears($event, 5)">Cumple 5 años</button>
    <button (click)="addSomeYears($event, 10)">Cumple 10 años</button>
  `,
  styles: ``,
})
export class GreetingsComponent {
  user = 'Pepe';
  avatar = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  size = 100;
  age = 22;

  // updateName(event: Event) {
  //   console.log(event);
  //   this.user = (event.target as HTMLInputElement).value;
  // }

  addSomeYears(event: Event, value: number) {
    console.log(event);
    this.age += value;
  }
}
