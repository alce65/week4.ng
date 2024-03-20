import { ComponentFixture, TestBed } from '@angular/core/testing';

import DdRegisterComponent from './dd-register.component';

describe('DdRegisterComponent', () => {
  let component: DdRegisterComponent;
  let fixture: ComponentFixture<DdRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
