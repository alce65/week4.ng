import { TestBed } from '@angular/core/testing';

import { NotesStoreService } from './store.service';
import { provideHttpClient } from '@angular/common/http';
import { NotesApiRepoService } from './api.repo.service';

describe('StoreService', () => {
  let service: NotesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesApiRepoService, provideHttpClient()],
    });
    service = TestBed.inject(NotesStoreService);
    service.apiRepoSrv = jasmine.createSpyObj('ApiRepoService', [
      'get',
      'post',
      'put',
      'delete',
    ]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
