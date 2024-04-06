import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyComponent } from './key.component';
import { By } from '@angular/platform-browser';
import { PhoneService } from '../../state/phone.service';
import { DebugElement } from '@angular/core';

describe('KeyComponent', () => {
  let component: KeyComponent;
  let fixture: ComponentFixture<KeyComponent>;
  let phoneService: PhoneService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyComponent);
    component = fixture.componentInstance;
    component.label = '';
    phoneService = TestBed.inject(PhoneService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When button is clicked', () => {
    let button: DebugElement;
    beforeEach(() => {
      spyOn(component, 'onClickNumber').and.callThrough();
      spyOn(phoneService, 'setPhoneNumber');
      button = fixture.debugElement.query(By.css('button'));
    });

    describe('And button label is 1 and is clicked', () => {
      it('should call onClickNumber', () => {
        component.label = '1';
        fixture.detectChanges();
        button.nativeElement.click();
        expect(component.onClickNumber).toHaveBeenCalled();
        expect(phoneService.setPhoneNumber).toHaveBeenCalledWith('1');
      });
    });

    describe('And button label is delete', () => {
      it('should call onClickNumber', () => {
        component.label = 'delete';
        fixture.detectChanges();
        button.nativeElement.click();
        expect(component.onClickNumber).toHaveBeenCalled();
        expect(phoneService.setPhoneNumber).toHaveBeenCalledWith('');
      });
    });
  });
});
