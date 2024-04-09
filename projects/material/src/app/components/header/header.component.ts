import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar>
      <mat-toolbar-row> </mat-toolbar-row>
      <mat-toolbar-row>
        <span>Second Line</span>
        <span class="example-spacer"></span>
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
  `,
})
export class HeaderComponent {}
