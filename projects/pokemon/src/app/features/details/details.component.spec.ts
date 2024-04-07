import { ComponentFixture, TestBed } from '@angular/core/testing';
import DetailsComponent from './details.component';
import { provideRouter } from '@angular/router';
import { API_URLS } from '../../app.config';
import { of } from 'rxjs';
import {
  PokeStateService,
  initialState,
} from '../../core/store/poke-state.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const mockStateSrv = jasmine.createSpyObj('PokeStateService', {
    getState: of(initialState),
    getPokeDetails: of({}),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
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

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
