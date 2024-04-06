import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersListComponent } from './counters-list.component';
import { By } from '@angular/platform-browser';

describe('CountersListComponent', () => {
  let component: CountersListComponent;
  let fixture: ComponentFixture<CountersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the child component emit the event countEvent', () => {
    it('should change the totalCounter and totalClicks', () => {
      const child = fixture.debugElement.queryAll(By.css('isdi-counter'))[0];
      child.triggerEventHandler('countEvent', 1);
      expect(component.totalCounter).toEqual(1);
      expect(component.totalClicks).toEqual(1);
    });
  });
});
