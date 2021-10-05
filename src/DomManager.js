export default class DomManager {
  populate(result, container) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    td.appendChild(document.createTextNode(`${result.user}: ${result.score}`));
    tr.appendChild(td);
    container.appendChild(tr);

    return this;
  }

  populateAll(results, container) {
    results.forEach((result) => this.populate(result, container));
    return this;
  }
}
