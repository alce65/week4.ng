import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAddComponent } from './notes-add.component';
import { provideHttpClient } from '@angular/common/http';

describe('NotesAddComponent', () => {
  let component: NotesAddComponent;
  let fixture: ComponentFixture<NotesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesAddComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
