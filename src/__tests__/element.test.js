/**
 * @jest-environment jsdom
 */

import Element from '../js/components/element';

test('container', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const popover = new Element(container);
  popover.bindToDom();
  expect(container.innerHTML).toBe(Element.button);
});
