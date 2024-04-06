import { ComponentFixture, TestBed } from '@angular/core/testing';

import HomeComponent from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When currentPage is "Greeting"', () => {
    it('should render the GreetingsComponent', () => {
      component.currentPage = 'Greetings';
      fixture.detectChanges();
      const page = fixture.debugElement.query(By.css('isdi-greetings'));
      expect(page).toBeTruthy();
    });
  });

  describe('When we use the method selectPage', () => {
    it('should change the currentPage', () => {
      spyOn(component, 'selectPage').and.callThrough();
      fixture.debugElement.queryAll(By.css('button'))[1].nativeElement.click();
      expect(component.selectPage).toHaveBeenCalled();
      expect(component.currentPage).toEqual('Counter');
    });
  });
});
