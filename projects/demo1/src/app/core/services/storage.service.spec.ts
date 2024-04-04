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

  it('should return an array', () => {
    spyOn(localStorage, 'getItem').and.returnValue('[1]');
    expect(service.getStorage()).toEqual([1]);
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('should set an array', () => {
    spyOn(localStorage, 'setItem');
    service.setStorage([1, 2, 3]);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
