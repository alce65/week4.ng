import { ComponentFixture, TestBed } from '@angular/core/testing';
import Challenge2Component from './challenge2.component';
import { By } from '@angular/platform-browser';

describe('Challenge2Component', () => {
  let component: Challenge2Component;
  let fixture: ComponentFixture<Challenge2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Challenge2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Challenge2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the component is initialized', () => {
    it('should have a property called title with the value "Challenge2"', () => {
      expect(component.title).toContain('Challenge2');
    });

    it('should render a h2 tag with the title value', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Challenge2');
    });
  });
});
