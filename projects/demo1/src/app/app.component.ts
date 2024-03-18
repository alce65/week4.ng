import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleNgComponent } from './shared/sample-ng/sample-ng.component';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, SampleNgComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pages: string[] = ['Home', 'Sample'];
  currentPage: string = 'Home';

  selectPage(page: string) {
    this.currentPage = page;
  }
}
