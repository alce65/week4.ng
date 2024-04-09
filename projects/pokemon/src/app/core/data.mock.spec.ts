import { getPokemons } from './data.mock';

describe('When user call getPokemons', () => {
  it('return the mock data array', () => {
    const result = getPokemons();
    expect(result.length).toBe(3);
  });
});
