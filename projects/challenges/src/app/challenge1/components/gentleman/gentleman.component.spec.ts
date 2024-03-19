import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GentlemanComponent } from './gentleman.component';

describe('GentlemanComponent', () => {
  let component: GentlemanComponent;
  let fixture: ComponentFixture<GentlemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GentlemanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GentlemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
