import { TestBed } from '@angular/core/testing';
import { FetchApiRepoService } from './fetch.api-repo.service';

describe('FetchApiRepoService', () => {
  let service: FetchApiRepoService;

  beforeEach(() => {
    spyOn(window, 'fetch').and.resolveTo({
      json: async () => ({
        results: [{ id: 1 }],
      }),
    } as Response);
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initialUrl', () => {
    expect(service.initialUrl).toBe(
      'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    );
  });

  describe('getAllPokemons', () => {
    it('should call fetch with url', async () => {
      await service.getAllPokemons();
      // expect(window.fetch).toHaveBeenCalledWith(service.url);
    });

    it('should call fetch with url', async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20';
      await service.getAllPokemons(url);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  });

  describe('getPokemonDetails', () => {
    it('should call fetch with url', async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/1';
      await service.getPokemonDetails(url);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  });
});
