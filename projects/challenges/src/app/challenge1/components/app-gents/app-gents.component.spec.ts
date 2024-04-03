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
  });
});
