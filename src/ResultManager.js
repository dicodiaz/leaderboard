export default class ResultManager {
  constructor({ results = [] } = {}) {
    this.results = results;
  }

  addResult(Result) {
    this.results.push(Result);
    return this;
  }
}
