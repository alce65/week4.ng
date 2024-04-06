import { getGentlemenData } from './data';

describe('When we use the method getGentlemenData', () => {
  it('should return a mocked data array with 3 items', () => {
    const gentlemenData = getGentlemenData();
    expect(gentlemenData.length).toBe(3);
  });
});
