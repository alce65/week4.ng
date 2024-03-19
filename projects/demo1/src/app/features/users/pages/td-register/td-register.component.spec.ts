import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRegisterComponent } from './td-register.component';

describe('TdRegisterComponent', () => {
  let component: TdRegisterComponent;
  let fixture: ComponentFixture<TdRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
