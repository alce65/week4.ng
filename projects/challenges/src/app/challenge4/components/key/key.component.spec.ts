import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyComponent } from './key.component';

describe('KeyComponent', () => {
  let component: KeyComponent;
  let fixture: ComponentFixture<KeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyComponent);
    component = fixture.componentInstance;
    component.label = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
