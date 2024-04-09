import { TestBed } from '@angular/core/testing';
import { ApiRepoService } from './api-repo.service';
import { API_URLS, ApiUrls } from '../../app.config';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { StateStructure } from '../types/state';
import {
  Pokemon,
  PokemonDetails,
  PokemonResponse,
  Sprites,
} from '../models/pokemon';

const mockPokeResponse: PokemonResponse = {
  count: 1118,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: '',
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ],
};

const mockStateStructure: StateStructure = {
  count: 1118,
  nextUrl: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previousUrl: '',
  pokeData: [
    {
      id: 1,
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      height: 7,
      weight: 69,
      sprites: {
        front_default: 'https://pokeapi.co/media/sprites/pokemon/1.png',
      } as Sprites,
      isFavorite: true,
    },
    {
      id: 2,
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
      height: 10,
      weight: 130,
      sprites: {
        front_default: 'https://pokeapi.co/media/sprites/pokemon/2.png',
      } as Sprites,
      isFavorite: true,
    },
  ],
  favorites: [{ id: 1 } as Pokemon, { id: 2 } as Pokemon],
  fullPokeData: [
    {
      id: 1,
      height: 7,
      weight: 69,
      sprites: {
        front_default: 'https://pokeapi.co/media/sprites/pokemon/1.png',
      } as Sprites,
    } as PokemonDetails,
    {
      id: 2,
      height: 10,
      weight: 130,
      sprites: {
        front_default: 'https://pokeapi.co/media/sprites/pokemon/2.png',
      } as Sprites,
    } as PokemonDetails,
  ],
};

describe('ApiRepoService', () => {
  let service: ApiRepoService;
  let controller: HttpTestingController;
  let urls: ApiUrls;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: API_URLS,
          useValue: {
            pokeUrl: 'https://pokeapi.co/api/v2',
            privateUrl: 'http://localhost:3001/pokemons',
          },
        },
      ],
    });
    service = TestBed.inject(ApiRepoService);
    controller = TestBed.inject(HttpTestingController);
    urls = TestBed.inject(API_URLS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllPokemons', () => {
    const expectedUrl = `${urls.pokeUrl}/pokemon?limit=20&offset=0`;
    service
      .getAllPokemons()
      .subscribe((poke) => expect(poke).toEqual(mockStateStructure));
    const req: TestRequest = controller.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPokeResponse);

    const requests1: TestRequest[] = controller.match(
      `${urls.pokeUrl}/pokemon/1/`,
    );
    requests1.forEach((req) => {
      expect(req.request.method).toBe('GET');
      req.flush({
        id: 1,
        height: 7,
        weight: 69,
        sprites: {
          front_default: 'https://pokeapi.co/media/sprites/pokemon/1.png',
        },
      });
    });
    const requests2: TestRequest[] = controller.match(
      `${urls.pokeUrl}/pokemon/2/`,
    );
    requests2.forEach((req) => {
      expect(req.request.method).toBe('GET');
      req.flush({
        id: 2,
        height: 10,
        weight: 130,
        sprites: {
          front_default: 'https://pokeapi.co/media/sprites/pokemon/2.png',
        },
      });
    });

    const reqPrivate: TestRequest = controller.expectOne(service.privateUrl);
    expect(reqPrivate.request.method).toBe('GET');
    reqPrivate.flush([{ id: 1 }, { id: 2 }]);
  });

  it('should call getPokemonDetails', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    service
      .getPokemonDetails(url)
      .subscribe((poke) => expect(poke).toEqual({} as PokemonDetails));
    const req: TestRequest = controller.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should call getFavoritePokemons', () => {
    service.getFavoritePokemons().subscribe((poke) => expect(poke).toEqual([]));
    const req: TestRequest = controller.expectOne(service.privateUrl);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should call getFavoritePokemons with error', () => {
    service.getFavoritePokemons().subscribe({
      error: (error) => expect(error.message).toContain('Error test'),
    });
    const req: TestRequest = controller.expectOne(service.privateUrl);
    expect(req.request.method).toBe('GET');
    req.flush('Error test', {
      status: 400,
      statusText: 'Bad Request',
    });
  });

  it('should call addFavorite', () => {
    service
      .addFavorite({ id: 1 } as Pokemon)
      .subscribe((poke) => expect(poke).toEqual({ id: 1 } as Pokemon));
    const req: TestRequest = controller.expectOne(service.privateUrl);
    expect(req.request.method).toBe('POST');
    req.flush({ id: 1 });
  });

  it('should call removeFavorite', () => {
    service
      .removeFavorite(1)
      .subscribe((poke) => expect(poke).toEqual({} as Pokemon));
    const req: TestRequest = controller.expectOne(service.privateUrl + '/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  afterEach(() => {
    controller.verify();
  });
});
