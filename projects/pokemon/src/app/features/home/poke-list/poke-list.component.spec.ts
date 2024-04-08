import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeListComponent } from './poke-list.component';
import { API_URLS } from '../../../app.config';
import { of } from 'rxjs';
import {
  PokeStateService,
  initialState,
} from '../../../core/store/poke-state.service';
import { By } from '@angular/platform-browser';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;
  const mockStateSrv = jasmine.createSpyObj('PokeStateService', {
    getState: of({ ...initialState, nextUrl: 'http://?l=1&c=2' }),
    goNext: undefined,
    goPrevious: undefined,
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

  describe('When child component emit pageEvent event', () => {
    it('should call the correct pagination method in the service', () => {
      fixture.debugElement
        .query(By.css('isdi-pagination'))
        .triggerEventHandler('pageEvent', 'next');
      expect(mockStateSrv.goNext).toHaveBeenCalled();
      fixture.debugElement
        .query(By.css('isdi-pagination'))
        .triggerEventHandler('pageEvent', 'prev');
      expect(mockStateSrv.goPrevious).toHaveBeenCalled();
    });
  });
});
