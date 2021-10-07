export default class Leaderboard {
  #BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  #GAME_ID = '6RWYo73TvPoVLbLnw9Tv';

  getResults = async () => {
    const url = `${this.#BASE_URL}games/${this.#GAME_ID}/scores/`;
    const response = await fetch(url);
    return response.json();
  };

  postResult = async (data) => {
    const url = `${this.#BASE_URL}games/${this.#GAME_ID}/scores/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
}
