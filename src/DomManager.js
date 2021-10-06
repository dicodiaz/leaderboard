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

  displayMsg = (message, container, optClass = null) => {
    if (optClass) container.classList.add(optClass);
    container.innerText = message;
    container.classList.remove('d-none');
    setTimeout(() => container.classList.remove('opacity-0'), 0);
    setTimeout(() => container.classList.add('opacity-0'), 2000);
    setTimeout(() => {
      container.classList.add('d-none');
      container.innerText = '';
      if (optClass) container.classList.remove(optClass);
    }, 3000);
    return this;
  };
}
