export default class Result {
  constructor({ user = null, score = 0 } = {}) {
    this.user = user;
    this.score = score;
  }
}
