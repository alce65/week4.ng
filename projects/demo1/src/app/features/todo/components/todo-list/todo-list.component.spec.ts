import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { StorageService } from '../../../../core/services/storage.service';
import { Task } from '../../../../core/models/task';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  // jasmine.createSpy()
  const mockSrv = jasmine.createSpyObj(StorageService, {
    getStorage: [],
    setStorage: undefined,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [
        {
          provide: 'STORE_NAME',
          useValue: 'test',
        },
        {
          provide: StorageService,
          useValue: mockSrv,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.tasks = [{ id: '1' } as Task];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onLoad should set tasks', () => {
    const mockTask = { id: '1' } as Task;
    fixture.debugElement
      .query(By.css('isdi-todo-card'))
      .triggerEventHandler('updateEvent', mockTask);

    // component.onUpdate(mockTask);
    expect(component.storageSrv.getStorage).toHaveBeenCalled();
    expect(mockSrv.getStorage).toHaveBeenCalled();
  });

  describe('When child element emit addEvent', () => {
    it('should call onAdd', () => {
      spyOn(component, 'onAdd').and.callThrough();
      fixture.debugElement
        .query(By.css('isdi-todo-add'))
        .triggerEventHandler('addEvent', { id: '1' });
      expect(component.onAdd).toHaveBeenCalled();
      expect(mockSrv.setStorage).toHaveBeenCalled();
    });
  });

  describe('When child element emit deleteEvent', () => {
    it('should call onDelete', () => {
      spyOn(component, 'onDelete').and.callThrough();
      fixture.debugElement
        .query(By.css('isdi-todo-card'))
        .triggerEventHandler('deleteEvent', '1');
      expect(component.onDelete).toHaveBeenCalled();
      expect(mockSrv.setStorage).toHaveBeenCalled();
    });
  });

  describe('When child element emit updateEvent', () => {
    it('should call onUpdate', () => {
      spyOn(component, 'onUpdate').and.callThrough();
      fixture.debugElement
        .query(By.css('isdi-todo-card'))
        .triggerEventHandler('updateEvent', { id: '1' });
      expect(component.onUpdate).toHaveBeenCalled();
      expect(mockSrv.setStorage).toHaveBeenCalled();
    });
  });
});
