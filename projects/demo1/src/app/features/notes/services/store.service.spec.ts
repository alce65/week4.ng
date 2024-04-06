import { TestBed } from '@angular/core/testing';

import { NotesStoreService } from './store.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { NotesApiRepoService } from './api.repo.service';
import { Note } from '../../../core/models/note';
import { of, throwError } from 'rxjs';

describe('StoreService', () => {
  let service: NotesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesApiRepoService, provideHttpClient()],
    });
    service = TestBed.inject(NotesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When ApiService return valid data', () => {
    const mockApiRepoService = jasmine.createSpyObj('ApiRepoService', {
      getAll: of([{ id: '1' }, { id: '2' }]),
      add: of({ id: '3' } as Note),
      update: of({ id: '1' } as Note),
      delete: of({ id: '2' } as Note),
    });
    beforeEach(() => {
      service.apiRepoSrv = mockApiRepoService;
    });

    it('should call loadNotes', () => {
      service.loadNotes();
      expect(mockApiRepoService.getAll).toHaveBeenCalled();
      service.getState().subscribe((state) => {
        expect(state.notes).toEqual([{ id: '1' } as Note, { id: '2' } as Note]);
      });
    });

    it('should call addNota', () => {
      service.addNota({} as Note);
      expect(mockApiRepoService.add).toHaveBeenCalled();
    });

    it('should call updateNota', () => {
      service.loadNotes();
      service.updateNota({ id: '1' } as Note);
      expect(mockApiRepoService.update).toHaveBeenCalled();
    });

    it('should call deleteNota', () => {
      service.loadNotes();
      service.removeNota('2');
      expect(mockApiRepoService.delete).toHaveBeenCalled();
    });
  });

  describe('When ApiService return INVALID data', () => {
    const mockApiRepoService = jasmine.createSpyObj('ApiRepoService', {
      getAll: throwError(() => new HttpErrorResponse({})),
      add: throwError(() => new HttpErrorResponse({})),
      update: throwError(() => new HttpErrorResponse({})),
      delete: throwError(() => new HttpErrorResponse({})),
    });
    beforeEach(() => {
      service.apiRepoSrv = mockApiRepoService;
    });

    it('should call loadNotes', () => {
      service.loadNotes();
      expect(mockApiRepoService.getAll).toHaveBeenCalled();
      service.getState().subscribe((state) => {
        expect(state.error).toEqual(new HttpErrorResponse({}));
      });
    });

    it('should call addNota', () => {
      service.addNota({} as Note);
    });

    it('should call updateNota', () => {
      service.loadNotes();
      service.updateNota({ id: '1' } as Note);
    });

    it('should call deleteNota', () => {
      service.loadNotes();
      service.removeNota('2');
    });
  });
});
