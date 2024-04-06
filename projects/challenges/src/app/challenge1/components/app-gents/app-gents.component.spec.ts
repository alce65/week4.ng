import { ComponentFixture, TestBed } from '@angular/core/testing';

import AppGentsComponent from './app-gents.component';

describe('AppGentsComponent', () => {
  let component: AppGentsComponent;
  let fixture: ComponentFixture<AppGentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppGentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.gentlemen.length).toBe(3);
  });

  describe('When user click select all button', () => {
    it('should select all gentlemen', () => {
      component.selectAll();
      expect(
        component.gentlemen.every((gentleman) => gentleman.selected),
      ).toBeTrue();
    });
  });

  describe('When user click delete button', () => {
    it('should delete selected gentlemen', () => {
      const selectedGent = component.gentlemen[0];
      selectedGent.selected = true;
      component.deleteItem(selectedGent);
      expect(component.gentlemen).not.toContain(selectedGent);
    });
  });

  describe('When user click select button', () => {
    it('should select a gentleman', () => {
      const selectedGent = component.gentlemen[0];
      component.selectItem(selectedGent);
      expect(selectedGent.selected).toBeTrue();
    });
  });
});
