import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2Component } from './form2.component';
import { By } from '@angular/platform-browser';

describe('Form2Component', () => {
  let component: Form2Component;
  let fixture: ComponentFixture<Form2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Form2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the form is submitted', () => {
    it('should emit the user data', () => {
      spyOn(component.changeStep, 'emit').and.callThrough();

      const form = fixture.debugElement.query(By.css('form'));
      const inputs = form.queryAll(By.css('input'));
      const select = form.query(By.css('select'));
      inputs[0].nativeElement.value = 'Pepe';
      inputs[0].nativeElement.dispatchEvent(new Event('input'));
      inputs[1].nativeElement.value = '1234';
      inputs[1].nativeElement.dispatchEvent(new Event('input'));
      inputs[2].nativeElement.value = '1234';
      inputs[2].nativeElement.dispatchEvent(new Event('input'));
      select.nativeElement.value = 'pro';
      select.nativeElement.dispatchEvent(new Event('change'));
      form.triggerEventHandler('ngSubmit', null);
      expect(component.changeStep.emit).toHaveBeenCalledWith({
        step: 3,
        userData: {
          username: 'Pepe',
          password: '1234',
          repeatPassword: '1234',
          accountType: 'pro',
        },
      });
    });
  });
});
