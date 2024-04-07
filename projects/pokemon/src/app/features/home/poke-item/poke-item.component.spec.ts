import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeItemComponent } from './poke-item.component';
import { provideRouter } from '@angular/router';
import { API_URLS } from '../../../app.config';
import { Pokemon } from '../../../core/models/pokemon';
import { of } from 'rxjs';
import {
  PokeStateService,
  initialState,
} from '../../../core/store/poke-state.service';

describe('PokeItemComponent', () => {
  let component: PokeItemComponent;
  let fixture: ComponentFixture<PokeItemComponent>;
  const mockStateSrv = jasmine.createSpyObj('PokeStateService', {
    getState: of(initialState),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeItemComponent],
      providers: [
        provideRouter([]),
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

    fixture = TestBed.createComponent(PokeItemComponent);
    component = fixture.componentInstance;
    component.poke = {
      sprites: {},
    } as Pokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
