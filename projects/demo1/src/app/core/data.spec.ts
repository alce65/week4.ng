import { repo } from './data';

describe('When we use the method getTasks', () => {
  it('should return a mocked data array with 3 items', async () => {
    const gentlemenData = await repo.getTasks();
    expect(gentlemenData.length).toBe(5);
  });
});

describe('When we use the method getNotes', () => {
  it('should return a mocked data array with 3 items', async () => {
    const gentlemenData = await repo.getNotes();
    expect(gentlemenData.length).toBe(5);
  });
});
