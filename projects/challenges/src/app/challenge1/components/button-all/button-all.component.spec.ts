import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAllComponent } from './button-all.component';
import { By } from '@angular/platform-browser';

describe('ButtonAllComponent', () => {
  let component: ButtonAllComponent;
  let fixture: ComponentFixture<ButtonAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user click the button', () => {
    it('should emit selectAllEvent', () => {
      spyOn(component.selectAllEvent, 'emit');
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      expect(component.selectAllEvent.emit).toHaveBeenCalled();
    });
  });
});
