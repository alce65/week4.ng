import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBackComponent } from './card-back.component';
import { Character } from '../../model/character';

describe('CardBackComponent', () => {
  let component: CardBackComponent;
  let fixture: ComponentFixture<CardBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBackComponent);
    component = fixture.componentInstance;
    component.item = {} as Character;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
