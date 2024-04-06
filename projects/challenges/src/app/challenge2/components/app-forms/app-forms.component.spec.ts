import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormsComponent } from './app-forms.component';
import { By } from '@angular/platform-browser';

describe('AppFormsComponent', () => {
  let component: AppFormsComponent;
  let fixture: ComponentFixture<AppFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.state.step).toBe(1);
  });

  describe('When the event change step is emitted in the first child component', () => {
    it('should update the step property with the value passed as argument', () => {
      spyOn(component, 'setStep1').and.callThrough();
      fixture.debugElement
        .query(By.css('isdi-form1'))
        .triggerEventHandler('changeStep', { step: 2, userData: {} });
      expect(component.setStep1).toHaveBeenCalled();
      expect(component.state.step).toBe(2);
    });
  });

  describe('When the event change step is emitted in the second child component', () => {
    it('should update the step property with the value passed as argument', () => {
      spyOn(component, 'setStep2').and.callThrough();
      component.state.step = 2;
      fixture.detectChanges();
      fixture.debugElement
        .query(By.css('isdi-form2'))
        .triggerEventHandler('changeStep', { step: 3, userData: {} });
      expect(component.setStep2).toHaveBeenCalled();
      expect(component.state.step).toBe(3);
    });
  });

  describe('When the event change step is emitted in the third child component', () => {
    it('should update the step property with the value passed as argument', () => {
      spyOn(component, 'setStep').and.callThrough();
      component.state.step = 3;
      fixture.detectChanges();
      fixture.debugElement
        .queryAll(By.css('button'))[1]
        .triggerEventHandler('click', {});
      expect(component.setStep).toHaveBeenCalled();
      expect(component.state.step).toBe(4);
    });
  });

  describe('When the event change step is emitted in the fourth child component', () => {
    it('should update the step property with the value passed as argument', () => {
      spyOn(component, 'setStep').and.callThrough();
      component.state.step = 4;
      fixture.detectChanges();
      fixture.debugElement
        .queryAll(By.css('button'))[1]
        .triggerEventHandler('click', {});
      expect(component.setStep).toHaveBeenCalled();
      expect(component.state.step).toBe(5);
    });
  });
});
