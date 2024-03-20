import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponent } from './greetings.component';
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tests de implementación
  // Tests de comportamiento (interacción con el DOM)

  it('should increment age by 1', () => {
    // component.addSomeYears(new Event('click'), 1);
    const button1 = fixture.debugElement.queryAll(By.css('button'))[0];
    button1.triggerEventHandler('click', null);
    fixture.detectChanges();
    const p2 = fixture.debugElement.queryAll(By.css('p'))[1];
    expect(p2.nativeElement.textContent).toContain('23');
  });

  it('should increment age by 5', () => {
    // component.addSomeYears(new Event('click'), 1);
    const button2 = fixture.debugElement.queryAll(By.css('button'))[1];
    button2.triggerEventHandler('click', null);
    fixture.detectChanges();
    const p2 = fixture.debugElement.queryAll(By.css('p'))[1];
    expect(p2.nativeElement.textContent).toContain('27');
  });
});
