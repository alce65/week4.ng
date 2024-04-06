import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { By } from '@angular/platform-browser';
import { RouterLink, provideRouter } from '@angular/router';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.items = [
      { title: 'Home', path: '/home' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const links = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(links.length).toBe(3);
    expect(links[0].nativeElement.textContent).toContain('Home');
    expect(links[1].nativeElement.textContent).toContain('About');
    expect(links[2].nativeElement.textContent).toContain('Contact');
  });
});
