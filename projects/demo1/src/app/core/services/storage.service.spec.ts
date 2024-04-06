import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService<number>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService, { provide: 'STORE_NAME', useValue: 'test' }],
    });

    service = TestBed.inject(StorageService);
    // service = new StorageService<number>();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When we use the method getStorage', () => {
    it('should call localStorage and return an array and', () => {
      spyOn(localStorage, 'getItem').and.returnValue('[1]');
      expect(service.getStorage()).toEqual([1]);
      expect(localStorage.getItem).toHaveBeenCalled();
    });

    it('should return an empty array if there is no data', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      expect(service.getStorage()).toEqual([]);
    });
  });

  describe('When we use the method setStorage', () => {
    it('should call localStorage for set de storage', () => {
      spyOn(localStorage, 'setItem');
      service.setStorage([1, 2, 3]);
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('When we use the method removeStorage', () => {
    it('should call localStorage for remove the storage', () => {
      spyOn(localStorage, 'removeItem');
      service.removeStorage();
      expect(localStorage.removeItem).toHaveBeenCalled();
    });
  });
});
