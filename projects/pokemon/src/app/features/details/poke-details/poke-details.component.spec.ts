import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeDetailsComponent } from './poke-details.component';
import { API_URLS } from '../../../app.config';
import { of } from 'rxjs';
import {
  PokeStateService,
  initialState,
} from '../../../core/store/poke-state.service';

describe('PokeDetailsComponent', () => {
  let component: PokeDetailsComponent;
  let fixture: ComponentFixture<PokeDetailsComponent>;
  const mockStateSrv = jasmine.createSpyObj('PokeStateService', {
    getState: of(initialState),
    getPokeDetails: of({
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'https://pokeapi.co/media/sprites/pokemon/1.png',
        back_default: 'https://pokeapi.co/media/sprites/pokemon/back/1.png',
      },
      types: [],
    }),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeDetailsComponent],
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

    fixture = TestBed.createComponent(PokeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
