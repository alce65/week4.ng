import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCardComponent } from './notes-card.component';
import { provideHttpClient } from '@angular/common/http';
import { Note } from '../../../../core/models/note';
import { NotesStoreService } from '../../services/store.service';
import { By } from '@angular/platform-browser';

const mockNotesStoreService = jasmine.createSpyObj('NotesStoreService', [
  'updateNota',
  'removeNota',
]);

describe('NotesCardComponent', () => {
  let component: NotesCardComponent;
  let fixture: ComponentFixture<NotesCardComponent>;
  let service: NotesStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesCardComponent],
      providers: [
        provideHttpClient(),
        { provide: NotesStoreService, useValue: mockNotesStoreService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesCardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(NotesStoreService);
    component.item = {} as Note;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user click update important', () => {
    it('should call updateNota from service', () => {
      spyOn(component, 'sendUpdate').and.callThrough();
      fixture.debugElement
        .query(By.css('input'))
        .triggerEventHandler('change', null);
      fixture.detectChanges();
      expect(component.sendUpdate).toHaveBeenCalled();
      expect(service.updateNota).toHaveBeenCalled();
    });
  });

  describe('When user click remove', () => {
    it('should call removeNota from service', () => {
      fixture.debugElement
        .query(By.css('button'))
        .triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(service.removeNota).toHaveBeenCalled();
    });
  });
});
