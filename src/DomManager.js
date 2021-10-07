export default class DomManager {
  appendResult = (result, container) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    td.appendChild(document.createTextNode(`${result.user}: ${result.score}`));
    tr.appendChild(td);
    container.appendChild(tr);

    return this;
  };

  appendAllResults = (results, container) => {
    results.forEach((result) => this.appendResult(result, container));
    return this;
  };

  removeAllResults = (container) => {
    container.innerHTML = '';
    return this;
  };

  displayMsg = async (message, container, optClass = null) => {
    if (optClass) container.classList.add(optClass);
    container.innerText = message;
    container.classList.remove('opacity-0');
    await this.delay(1000);
    container.classList.add('opacity-0');
    await this.delay(1000);
    if (optClass) container.classList.remove(optClass);
    return this;
  };

  delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
}
