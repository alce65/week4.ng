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

  fit('onLoad should set tasks', () => {
    const mockTask = { id: '1' } as Task;
    fixture.debugElement
      .query(By.css('isdi-todo-card'))
      .triggerEventHandler('updateEvent', mockTask);

    // component.onUpdate(mockTask);
    expect(component.storageSrv.getStorage).toHaveBeenCalled();
    expect(mockSrv.getStorage).toHaveBeenCalled();
  });
});
