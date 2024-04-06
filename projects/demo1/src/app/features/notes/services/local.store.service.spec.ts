import { TestBed } from '@angular/core/testing';
import { NotesStoreService } from './local.store.service';
import { StorageService } from '../../../core/services/storage.service';
import { Note } from '../../../core/models/note';
import { repo } from '../../../core/data';

describe('StoreService', () => {
  let service: NotesStoreService;
  const mockData = [{ id: '1' } as Note, { id: '2' } as Note];

  const mockStorageService = jasmine.createSpyObj('StorageService', {
    getStorage: mockData,
    setStorage: null,
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'STORE_NAME', useValue: 'test' },
        { provide: StorageService, useValue: mockStorageService },
      ],
    });
    service = TestBed.inject(NotesStoreService);
    service.storageSrv = mockStorageService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call loadNotes', () => {
    service.loadNotes();
    expect(mockStorageService.getStorage).toHaveBeenCalled();
    service.getState().subscribe((state) => {
      expect(state.notes).toEqual(mockData);
    });
  });

  it('should call addNota', () => {
    service.addNota({} as Note);
    expect(mockStorageService.setStorage).toHaveBeenCalled();
  });

  it('should call updateNota', () => {
    service.loadNotes();
    service.updateNota({ id: '1' } as Note);
    expect(mockStorageService.setStorage).toHaveBeenCalled();
  });

  it('should call deleteNota', () => {
    service.loadNotes();
    service.removeNota('2');
    expect(mockStorageService.setStorage).toHaveBeenCalled();
  });
});

describe('StoreService', () => {
  let service: NotesStoreService;
  const mockStorageService = jasmine.createSpyObj('StorageService', {
    getStorage: [],
    setStorage: null,
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'STORE_NAME', useValue: 'test' },
        { provide: StorageService, useValue: mockStorageService },
      ],
    });
    service = TestBed.inject(NotesStoreService);
    service.storageSrv = mockStorageService;
  });

  it('should call loadNotes with NOT notes stored', async () => {
    spyOn(repo, 'getNotes').and.returnValue(Promise.resolve([]));
    service.loadNotes();
    expect(mockStorageService.getStorage).toHaveBeenCalled();
    expect(await repo.getNotes).toHaveBeenCalled();
    service.getState().subscribe((state) => {
      expect(state.notes).toEqual([]);
    });
  });
});
