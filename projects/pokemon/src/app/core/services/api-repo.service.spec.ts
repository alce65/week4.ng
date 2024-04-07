import { TestBed } from '@angular/core/testing';
import { ApiRepoService } from './api-repo.service';
import { API_URLS } from '../../app.config';
import { provideHttpClient } from '@angular/common/http';

describe('ApiRepoService', () => {
  let service: ApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: API_URLS,
          useValue: {
            pokeUrl: '',
            privateUrl: '',
          },
        },
        provideHttpClient(),
      ],
    });
    service = TestBed.inject(ApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
