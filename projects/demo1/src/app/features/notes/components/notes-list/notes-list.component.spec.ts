import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesListComponent } from './notes-list.component';
import { StorageService } from '../../../../core/services/storage.service';

fdescribe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

  // jasmine.createSpy()
  jasmine.createSpyObj(StorageService, [
    {
      getStorage: [],
      setStorage: undefined,
    },
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesListComponent],
      providers: [
        {
          provide: 'STORE_NAME',
          useValue: 'test',
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
