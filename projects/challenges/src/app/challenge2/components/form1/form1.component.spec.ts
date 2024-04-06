import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Form1Component } from './form1.component';
import { By } from '@angular/platform-browser';

describe('Form1Component', () => {
  let component: Form1Component;
  let fixture: ComponentFixture<Form1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Form1Component);
    component = fixture.componentInstance;
    component.initialUser = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the form is submitted', () => {
    it('should emit the user data', () => {
      spyOn(component, 'onSubmit').and.callThrough();
      spyOn(component.changeStep, 'emit').and.callThrough();

      const form = fixture.debugElement.query(By.css('form'));
      const inputs = form.queryAll(By.css('input'));
      inputs[0].nativeElement.value = 'Pepe';
      inputs[0].nativeElement.dispatchEvent(new Event('input'));
      inputs[1].nativeElement.value = 'Perez';
      inputs[1].nativeElement.dispatchEvent(new Event('input'));
      inputs[2].nativeElement.value = 'pp@sample.com';
      inputs[2].nativeElement.dispatchEvent(new Event('input'));
      inputs[3].nativeElement.value = '2021-01-01';
      inputs[3].nativeElement.dispatchEvent(new Event('input'));
      inputs[4].nativeElement.checked = true;
      inputs[4].nativeElement.dispatchEvent(new Event('change'));
      inputs[8].nativeElement.checked = true;
      inputs[8].nativeElement.dispatchEvent(new Event('change'));
      form.triggerEventHandler('ngSubmit', null);
      expect(component.onSubmit).toHaveBeenCalled();
      expect(component.changeStep.emit).toHaveBeenCalledWith({
        step: 2,
        userData: {
          name: 'Pepe',
          lastName: 'Perez',
          email: 'pp@sample.com',
          birthDate: '2021-01-01',
          gender: 'male',
          hasNewsletter: true,
        },
      });
    });
  });
});
