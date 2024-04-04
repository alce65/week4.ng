import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesListComponent } from './notes-list.component';
import { NotesApiRepoService } from '../../services/api.repo.service';
import { provideHttpClient } from '@angular/common/http';

describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesListComponent],
      providers: [NotesApiRepoService, provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
