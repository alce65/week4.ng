import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAddComponent } from './notes-add.component';
import { provideHttpClient } from '@angular/common/http';
import { NotesStoreService } from '../../services/store.service';
import { By } from '@angular/platform-browser';

const mockNotesStoreService = jasmine.createSpyObj('NotesStoreService', [
  'addNota',
]);

describe('NotesAddComponent', () => {
  let component: NotesAddComponent;
  let fixture: ComponentFixture<NotesAddComponent>;
  let service: NotesStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesAddComponent],
      providers: [
        provideHttpClient(),
        { provide: NotesStoreService, useValue: mockNotesStoreService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesAddComponent);
    component = fixture.componentInstance;
    component.details = document.createElement('details');
    service = TestBed.inject(NotesStoreService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should call addNota from service', () => {
      spyOn(component, 'onSubmit').and.callThrough();
      const form = fixture.debugElement.query(By.css('form'));
      const inputs = form.queryAll(By.css('input'));
      inputs[0].nativeElement.value = 'Title';
      inputs[0].triggerEventHandler('input', {
        target: inputs[0].nativeElement,
      });
      inputs[1].nativeElement.value = 'Author';

      inputs[1].triggerEventHandler('input', {
        target: inputs[1].nativeElement,
      });
      form.triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();

      const newNote = {
        id: jasmine.any(String),
        isImportant: false,
        title: 'Title',
        author: 'Author',
      };
      expect(component.onSubmit).toHaveBeenCalled();
      expect(service.addNota).toHaveBeenCalledWith(newNote);
    });
  });
});
