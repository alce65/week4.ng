import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBackComponent } from './card-back.component';
import { Character } from '../../model/character';
import { By } from '@angular/platform-browser';

describe('CardBackComponent', () => {
  let component: CardBackComponent;
  let fixture: ComponentFixture<CardBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBackComponent);
    component = fixture.componentInstance;
    component.item = { isAlive: true } as Character;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the talk button is clicked', () => {
    it('should emit the talk event', () => {
      spyOn(component, 'sendTalk').and.callThrough();
      spyOn(component.talkEvent, 'emit').and.callThrough();
      fixture.debugElement.queryAll(By.css('button'))[0].nativeElement.click();
      expect(component.sendTalk).toHaveBeenCalled();
      expect(component.talkEvent.emit).toHaveBeenCalled();
    });
  });

  describe('When the kill button is clicked', () => {
    it('should emit the kill event', () => {
      spyOn(component, 'sendKill').and.callThrough();
      spyOn(component.killEvent, 'emit').and.callThrough();
      fixture.debugElement.queryAll(By.css('button'))[1].nativeElement.click();
      expect(component.sendKill).toHaveBeenCalled();
      expect(component.killEvent.emit).toHaveBeenCalled();
    });
  });
});
