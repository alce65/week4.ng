import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import TdRegisterComponent from './td-register.component';
import { By } from '@angular/platform-browser';

describe('TdRegisterComponent', () => {
  let component: TdRegisterComponent;
  let fixture: ComponentFixture<TdRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TdRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tests de implementación
  // Tests de comportamiento (interacción con el DOM)

  it('should submit when we click the button', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    inputs[0].nativeElement.value = 'Pepe';
    inputs[0].nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.ngForm.value.name).toBe('Pepe');
    expect(component.ngForm.value.email).toBe('');
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should ....', () => {
    spyOn(console, 'log');
    component.foo();
    expect(console.log).toHaveBeenCalledWith('foo');
  });
});
