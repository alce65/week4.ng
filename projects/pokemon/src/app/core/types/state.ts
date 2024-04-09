import { Pokemon, PokemonDetails } from '../models/pokemon';

export type StateStructure = {
  count: number;
  nextUrl: string | null;
  previousUrl: string | null;
  pokeData: Array<Pokemon>;
  fullPokeData: Array<PokemonDetails>;
  favorites: Array<Pokemon>;
};
