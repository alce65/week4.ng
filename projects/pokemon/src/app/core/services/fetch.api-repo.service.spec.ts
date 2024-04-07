import { TestBed } from '@angular/core/testing';
import { FetchApiRepoService } from './fetch.api-repo.service';

describe('FetchApiRepoService', () => {
  let service: FetchApiRepoService;

  beforeEach(() => {
    spyOn(window, 'fetch');
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
