import { TestBed } from '@angular/core/testing';

import { NotesApiRepoService } from './api.repo.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiRepoService', () => {
  let service: NotesApiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(NotesApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
