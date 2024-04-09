import { TestBed } from '@angular/core/testing';
import { NotesApiRepoService } from './api.repo.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { urlBase } from '../../../app.config';
import { Note } from '../../../core/models/note';

const expectedUrl = new URL('notes', urlBase).href;

describe('ApiRepoService', () => {
  let service: NotesApiRepoService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NotesApiRepoService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAll', () => {
    service.getAll().subscribe((notes) => expect(notes).toEqual([]));
    const req: TestRequest = controller.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should call add', () => {
    service
      .add({} as Note)
      .subscribe((note) => expect(note).toEqual({} as Note));
    const req: TestRequest = controller.expectOne(expectedUrl);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should call update', () => {
    service
      .update({ id: '1' } as Note)
      .subscribe((note) => expect(note).toEqual({} as Note));
    const req: TestRequest = controller.expectOne(expectedUrl + '/1');
    expect(req.request.method).toBe('PATCH');
    req.flush({});
  });

  it('should call delete', () => {
    service.delete('1').subscribe((note) => expect(note).toEqual({} as Note));
    const req: TestRequest = controller.expectOne(expectedUrl + '/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
