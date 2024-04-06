import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponent } from './actions.component';
import { By } from '@angular/platform-browser';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    component.labels = ['Call', 'Hang'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 2 buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('isdi-action'));
    expect(buttons.length).toBe(2);
  });
});
