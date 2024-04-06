import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { PhoneService } from '../../state/phone.service';
import { By } from '@angular/platform-browser';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let phoneService: PhoneService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent],
      providers: [PhoneService],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    phoneService = TestBed.inject(PhoneService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when phone is calling', () => {
    it('should display the phone number', () => {
      const message = fixture.debugElement.query(
        By.css('.message'),
      ).nativeElement;
      expect(message.textContent).toContain('calling');
    });
  });
  describe('when phone is not calling', () => {
    it('should display ...', () => {
      phoneService.changeCalling();
      const message = fixture.debugElement.query(
        By.css('.message'),
      ).nativeElement;
      expect(message.textContent).toContain('...');
    });
  });
});
