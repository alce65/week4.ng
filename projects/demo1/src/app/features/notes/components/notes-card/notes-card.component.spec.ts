import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCardComponent } from './notes-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Note } from '../../../../core/models/note';

describe('NotesCardComponent', () => {
  let component: NotesCardComponent;
  let fixture: ComponentFixture<NotesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NotesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesCardComponent);
    component = fixture.componentInstance;
    component.item = {} as Note;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
