import DomManager from './DomManager.js';
import Result from './Result.js';
import ResultManager from './ResultManager.js';
import './style.css';

const [result1, result2, result3, result4, result5, result6, result7] = [
  new Result({ user: 'Dico', score: 100 }),
  new Result({ user: 'Peter', score: 110 }),
  new Result({ user: 'Mark', score: 90 }),
  new Result({ user: 'Tony', score: 120 }),
  new Result({ user: 'Roger', score: 80 }),
  new Result({ user: 'Steve', score: 130 }),
  new Result({ user: 'Stan', score: 70 }),
];
const resultManager = new ResultManager();
const domManager = new DomManager();
const resultListContainer = document.querySelector('#result-list');

window.onload = () => {
  resultManager
    .addResult(result1)
    .addResult(result2)
    .addResult(result3)
    .addResult(result4)
    .addResult(result5)
    .addResult(result6)
    .addResult(result7);
  domManager.populateAll(resultManager.results, resultListContainer);
};
