/**
 * @jest-environment jsdom
 */

import DomManager from '../DomManager.js';

const domManager = new DomManager();
const container = document.createElement('div');
document.body.appendChild(container);

describe('Testing each and every DomManager method', () => {
  test('Appending a single result', () => {
    domManager.appendResult({ user: 'Dico', score: 100 }, container);
    expect(container.children.length).toBe(1);
    expect(container.firstChild.tagName).toBe('TR');
    expect(container.firstChild.firstChild.tagName).toBe('TD');
    expect(container.firstChild.firstChild.innerHTML).toBe('Dico: 100');
  });

  test('Appending an array of results', () => {
    domManager.appendAllResults(
      [
        { user: 'Amanda', score: 110 },
        { user: 'Danielle', score: 120 },
        { user: 'Elenita', score: 130 },
        { user: 'Roger', score: 140 },
      ],
      container,
    );
    expect(container.children.length).toBe(5);
    const resultElements = container.querySelectorAll('td');
    expect(resultElements[1].innerHTML).toBe('Amanda: 110');
    expect(resultElements[2].innerHTML).toBe('Danielle: 120');
    expect(resultElements[3].innerHTML).toBe('Elenita: 130');
    expect(resultElements[4].innerHTML).toBe('Roger: 140');
  });

  test('Removing all result elements', () => {
    domManager.removeAllResults(container);
    expect(container.children.length).toBe(0);
  });

  test('Displaying message', async () => {
    container.classList.add('opacity-0');
    domManager.displayMsg('Hello world', container, 'text-center');
    expect(container.classList.length).toBe(1);
    expect(container.classList).toContain('text-center');
    expect(container.innerText).toBe('Hello world');
    await domManager.delay(1000);
    expect(container.classList.length).toBe(2);
    expect(container.classList).toContain('opacity-0');
    await domManager.delay(1000);
    expect(container.classList.length).toBe(1);
    expect(container.classList).not.toContain('text-center');
  });
});
