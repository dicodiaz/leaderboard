import Result from './Result.js';

export default class ResultManager {
  constructor({ results = [] } = {}) {
    this.results = results;
  }

  addResult = (result = {}) => {
    this.results.push(new Result(result));
    return this;
  };

  addAllResults = (results = []) => {
    results.forEach((result) => this.addResult(result));
    return this;
  };

  clearResults = () => {
    this.results = [];
    return this;
  };
}
