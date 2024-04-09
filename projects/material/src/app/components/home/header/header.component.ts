import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar>
      <mat-toolbar-row class="header">
        <h1>
          {{ title }}
        </h1>
        <ng-content></ng-content>
      </mat-toolbar-row>
      <mat-toolbar-row>
        <span>Samples of use of Angular Material</span>
        <span class="spacer"></span>
        <mat-icon
          class="example-icon"
          aria-hidden="false"
          aria-label="Example user verified icon"
          >verified_user</mat-icon
        >
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: `
    mat-toolbar {
      padding: 1rem;
    }
    .header {
      justify-content: space-between;
    }
    .spacer {
      flex: 1 1 auto;
    }
  `,
})
export class HeaderComponent {
  title = 'Learning Angular Material';
}
