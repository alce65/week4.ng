import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardComponent } from './todo-card.component';
import { Task } from '../../../../core/models/task';

describe('TodoCardComponent', () => {
  let component: TodoCardComponent;
  let fixture: ComponentFixture<TodoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoCardComponent);
    component = fixture.componentInstance;
    component.item = {} as Task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user complete the form and use the method sendUpdate', () => {
    it('should emit the event updateEvent', () => {
      spyOn(component.updateEvent, 'emit');
      component.sendUpdate();
      expect(component.updateEvent.emit).toHaveBeenCalledWith(component.item);
    });
  });

  describe('When user complete the form and use the method sendDelete', () => {
    it('should emit the event deleteEvent', () => {
      spyOn(component.deleteEvent, 'emit');
      component.sendDelete();
      expect(component.deleteEvent.emit).toHaveBeenCalledWith(
        component.item.id,
      );
    });
  });
});
