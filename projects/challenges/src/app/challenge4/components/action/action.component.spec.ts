import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionComponent } from './action.component';
import { By } from '@angular/platform-browser';
import { PhoneService } from '../../state/phone.service';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;
  let phoneSrv: PhoneService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    component.label = 'Hang';
    phoneSrv = TestBed.inject(PhoneService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the label is "Hang"', () => {
    it('should set the button class to "hang"', () => {
      const button = fixture.debugElement.query(By.css('button'));
      expect(button.nativeElement.classList).toContain('hang');
    });
  });
  describe('when the label is "Call"', () => {
    it('should set the button class to "call"', () => {
      component.label = 'Call';
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('button'));
      expect(button.nativeElement.classList).toContain('call');
    });
  });
  describe('When the user clicks the button', () => {
    it('should call the onClick method and the service method', () => {
      spyOn(component, 'onClick').and.callThrough();
      spyOn(phoneSrv, 'changeCalling');
      const button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      expect(component.onClick).toHaveBeenCalled();
      expect(phoneSrv.changeCalling).toHaveBeenCalled();
    });
  });
});
