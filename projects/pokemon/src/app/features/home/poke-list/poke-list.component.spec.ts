import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeListComponent } from './poke-list.component';
import { API_URLS } from '../../../app.config';
import { of } from 'rxjs';
import {
  PokeStateService,
  initialState,
} from '../../../core/store/poke-state.service';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;
  const mockStateSrv = jasmine.createSpyObj('PokeStateService', {
    getState: of(initialState),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeListComponent],
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

    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
