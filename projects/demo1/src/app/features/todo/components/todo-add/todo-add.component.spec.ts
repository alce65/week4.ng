import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { By } from '@angular/platform-browser';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user complete the form and use the method onSubmit', () => {
    it('should emit the event addEvent and reset the form', () => {
      spyOn(component, 'onSubmit').and.callThrough();
      spyOn(component.addEvent, 'emit');
      const form = fixture.debugElement.query(By.css('form'));
      const inputs = form.queryAll(By.css('input'));
      inputs[0].nativeElement.value = 'Title';
      inputs[0].nativeElement.dispatchEvent(new Event('input'));
      inputs[1].nativeElement.value = 'Owner';
      inputs[1].nativeElement.dispatchEvent(new Event('input'));
      form.triggerEventHandler('ngSubmit', null);

      expect(component.onSubmit).toHaveBeenCalled();
      expect(component.addEvent.emit).toHaveBeenCalledWith({
        id: jasmine.any(String),
        isDone: false,
        title: 'Title',
        owner: 'Owner',
      });
      expect(component.form.value).toEqual({ title: null, owner: null });
    });
  });
});
