import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tests de implementación

  it('should increment value by 1', () => {
    component.onClick(1);
    expect(component.value).toBe(1);
  });

  it('should decrement value by 1', () => {
    component.onClick(-1);
    expect(component.value).toBe(-1);
  });

  it('should emit value on click', () => {
    let emittedValue = 0;
    component.countEvent.subscribe((value) => (emittedValue = value));
    component.onClick(1);
    expect(emittedValue).toBe(1);
  });

  it('should apply red class when value is less than 0', () => {
    component.value = -1;
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(span.classList.contains('red')).toBe(true);
  });

  // Tests de comportamiento (interacción con el DOM  )

  it('should be respond to button [-] click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(span.textContent).toBe('-1');
  });

  it('should be respond to button [+] click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].triggerEventHandler('click', null);
    // buttons[1].nativeElement.click();
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(span.textContent).toBe('1');
  });
});
