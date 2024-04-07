import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavListComponent } from './fav-list.component';
import { API_URLS } from '../../../app.config';
import { of } from 'rxjs';
import {
  PokeStateService,
  initialState,
} from '../../../core/store/poke-state.service';

describe('FavListComponent', () => {
  let component: FavListComponent;
  let fixture: ComponentFixture<FavListComponent>;
  const mockStateSrv = jasmine.createSpyObj('PokeStateService', {
    getState: of(initialState),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavListComponent],
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

    fixture = TestBed.createComponent(FavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
