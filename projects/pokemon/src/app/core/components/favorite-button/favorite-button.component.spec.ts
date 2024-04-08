import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteButtonComponent } from './favorite-button.component';
import { API_URLS } from '../../../app.config';
import { Pokemon } from '../../models/pokemon';
import { of } from 'rxjs';
import { PokeStateService, initialState } from '../../store/poke-state.service';
import { By } from '@angular/platform-browser';

describe('FavoriteButtonComponent', () => {
  let component: FavoriteButtonComponent;
  let fixture: ComponentFixture<FavoriteButtonComponent>;
  const mockStateSrv = jasmine.createSpyObj('PokeStateService', {
    getState: of(initialState),
    toggleFavorite: undefined,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteButtonComponent],
      providers: [
        {
          provide: API_URLS,
          useValue: {
            pokeUrl: '',
            privateUrl: '',
          },
        },
        {
          provide: PokeStateService,
          useValue: mockStateSrv,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteButtonComponent);
    component = fixture.componentInstance;
    component.poke = {} as Pokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onFav', () => {
    it('should toggle the favorite property of the pokemon', () => {
      component.poke = { isFavorite: false } as Pokemon;
      fixture.debugElement
        .query(By.css('.fav-icon'))
        .triggerEventHandler('click', null);

      expect(component.poke.isFavorite).toBeTrue();
      fixture.debugElement
        .query(By.css('.fav-icon'))
        .triggerEventHandler('click', null);
      expect(component.poke.isFavorite).toBeFalse();
    });

    it('should call the state service to toggle the favorite property', () => {
      component.poke = { isFavorite: false } as Pokemon;
      fixture.debugElement
        .query(By.css('.fav-icon'))
        .triggerEventHandler('click', null);
      expect(mockStateSrv.toggleFavorite).toHaveBeenCalledWith(component.poke);
    });
  });
});
