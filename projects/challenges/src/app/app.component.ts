import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppGentsComponent } from './challenge1/components/app-gents/app-gents.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, AppGentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Challenges';
}
