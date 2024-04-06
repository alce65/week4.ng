import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GentlemanComponent } from './gentleman.component';
import { Gentleman } from '../../model/gentleman';
import { By } from '@angular/platform-browser';

describe('GentlemanComponent', () => {
  let component: GentlemanComponent;
  let fixture: ComponentFixture<GentlemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GentlemanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GentlemanComponent);
    component = fixture.componentInstance;
    component.gent = {} as Gentleman;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user click select button', () => {
    it('should emit selectGentEvent', () => {
      spyOn(component.selectGentEvent, 'emit');
      fixture.debugElement.queryAll(By.css('i'))[0].nativeElement.click();
      expect(component.selectGentEvent.emit).toHaveBeenCalled();
    });
  });

  describe('When user click delete button', () => {
    it('should emit deleteGentEvent', () => {
      spyOn(component.deleteGentEvent, 'emit');
      fixture.debugElement.queryAll(By.css('i'))[1].nativeElement.click();
      expect(component.deleteGentEvent.emit).toHaveBeenCalled();
    });
  });
});
