import ResultManager from '../ResultManager.js';

const resultManager = new ResultManager();

describe('Testing each and every ResultManager method', () => {
  test('Adding a single result', () => {
    resultManager.addResult({ user: 'Dico', score: 100 });
    expect(resultManager.results.length).toBe(1);
    expect(resultManager.results[0]).toEqual({ user: 'Dico', score: 100 });
  });

  test('Adding an array of results', () => {
    resultManager.addAllResults([
      { user: 'Amanda', score: 110 },
      { user: 'Danielle', score: 120 },
      { user: 'Elenita', score: 130 },
      { user: 'Roger', score: 140 },
    ]);
    expect(resultManager.results.length).toBe(5);
    expect(resultManager.results[1]).toEqual({ user: 'Amanda', score: 110 });
    expect(resultManager.results[2]).toEqual({ user: 'Danielle', score: 120 });
    expect(resultManager.results[3]).toEqual({ user: 'Elenita', score: 130 });
    expect(resultManager.results[4]).toEqual({ user: 'Roger', score: 140 });
  });

  test('Clearing all results', () => {
    resultManager.clearResults();
    expect(resultManager.results.length).toBe(0);
  });
});
