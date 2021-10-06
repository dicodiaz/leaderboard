import DomManager from './DomManager.js';
import Leaderboard from './Leaderboard.js';
import ResultManager from './ResultManager.js';
import './style.css';

const resultManager = new ResultManager();
const domManager = new DomManager();
const leaderboard = new Leaderboard();
const resultList = document.querySelector('#result-list');
const refreshBtn = document.querySelector('#refresh-btn');
const refreshMsg = document.querySelector('#refresh-msg');
const nameInput = document.querySelector('#name-input');
const scoreInput = document.querySelector('#score-input');
const submitBtn = document.querySelector('#submit-btn');
const submitMsg = document.querySelector('#submit-msg');

window.onload = () => {
  leaderboard.getResults().then((data) => {
    resultManager.addResultsFromAPI(data.result);
    domManager.appendAllResults(resultManager.results, resultList);
  });

  refreshBtn.addEventListener('click', () => {
    leaderboard.getResults().then((data) => {
      resultManager.clearResults().addResultsFromAPI(data.result);
      domManager
        .removeAllResults(resultList)
        .appendAllResults(resultManager.results, resultList)
        .displayMsg('Refresh successful', refreshMsg, 'text-success');
    });
  });

  submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const score = scoreInput.value;
    if (name === '' || score === '') {
      domManager.displayMsg('Please fill every field before submitting', submitMsg, 'text-danger');
    } else {
      const obj = { user: name, score };
      leaderboard.postResult(obj).then((data) => {
        nameInput.value = '';
        scoreInput.value = '';
        domManager.displayMsg(data.result, submitMsg, 'text-success');
      });
    }
  });
};
