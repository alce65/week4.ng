import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import { LogoOptions } from '../../../interfaces/logo.options';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LogoComponent ', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    component.options = {} as LogoOptions;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click in the paths', () => {
    spyOn(component.logoClick, 'next').and.callThrough();
    const debugElementsPath = debugElement.queryAll(By.css('path'));
    debugElementsPath.forEach((path) => {
      path.triggerEventHandler('click');
      expect(component.logoClick.next).toHaveBeenCalled();
    });
  });
});
