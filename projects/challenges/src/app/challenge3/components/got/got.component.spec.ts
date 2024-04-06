import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { GotComponent } from './got.component';
import { Fighter, King } from '../../model/character';
import { By } from '@angular/platform-browser';
import { repo } from '../../data';

describe('GotComponent', () => {
  let component: GotComponent;
  let fixture: ComponentFixture<GotComponent>;

  beforeEach(async () => {
    spyOn(repo, 'getCharacters').and.resolveTo([
      { name: 'John Snow', isAlive: true } as King,
      { name: 'Daenerys Targaryen', isAlive: true } as Fighter,
    ]);

    await TestBed.configureTestingModule({
      imports: [GotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When child component isdi-card-back emit an event talkEvent', () => {
    it('should call onTalk method', fakeAsync(() => {
      const characterMock = { name: 'John Snow' } as King;
      spyOn(component, 'onTalk').and.callThrough();
      spyOn(console, 'log');
      fixture.detectChanges();
      fixture.debugElement
        .query(By.css('isdi-card-back'))
        .triggerEventHandler('talkEvent', characterMock);

      expect(component.onTalk).toHaveBeenCalledWith(characterMock);
      expect(console.log).toHaveBeenCalledWith('Talk', characterMock);
      tick(2000);
      fixture.detectChanges();
      expect(console.log).toHaveBeenCalledWith('Talk Stop');
    }));
  });

  describe('When child component isdi-card-back emit an event killEvent', () => {
    it('should call onKill method', () => {
      const characterMock = { name: 'John Snow' } as King;
      spyOn(component, 'onKill').and.callThrough();
      fixture.detectChanges();
      fixture.debugElement
        .query(By.css('isdi-card-back'))
        .triggerEventHandler('killEvent', characterMock);

      expect(component.onKill).toHaveBeenCalledWith(characterMock);
      expect(component.characters[0].isAlive).toBeFalse();
    });
  });
});
