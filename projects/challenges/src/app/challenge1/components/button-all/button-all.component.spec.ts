import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAllComponent } from './button-all.component';

describe('ButtonAllComponent', () => {
  let component: ButtonAllComponent;
  let fixture: ComponentFixture<ButtonAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
