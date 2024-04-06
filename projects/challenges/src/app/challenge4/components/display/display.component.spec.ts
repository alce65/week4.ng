import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { PhoneService } from '../../state/phone.service';
import { By } from '@angular/platform-browser';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let phoneSrv: PhoneService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayComponent],
      providers: [PhoneService],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    phoneSrv = TestBed.inject(PhoneService);
    phoneSrv.setPhoneNumber('');
    phoneSrv.setPhoneNumber('8');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the phone number', () => {
    const number = fixture.debugElement.query(By.css('.number')).nativeElement;
    expect(number.textContent).toBe('8');
  });
});
