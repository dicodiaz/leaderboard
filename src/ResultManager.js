import Result from './Result.js';

export default class ResultManager {
  constructor({ results = [] } = {}) {
    this.results = results;
  }

  addResult = (result = {}) => {
    this.results.push(result);
    return this;
  };

  addResultsFromAPI = (results = []) => {
    results.forEach((result) => this.addResult(new Result(result)));
    return this;
  };

  clearResults = () => {
    this.results = [];
    return this;
  };
}
