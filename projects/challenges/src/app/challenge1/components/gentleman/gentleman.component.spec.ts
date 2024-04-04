import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GentlemanComponent } from './gentleman.component';
import { Gentleman } from '../../model/gentleman';

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
});
