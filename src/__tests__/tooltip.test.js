/**
 * @jest-environment jsdom
 */
import Element from '../js/components/element';

test('show tooltip', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const popover = new Element(container);
  popover.bindToDom();

  const button = container.querySelector('.btn');
  button.click();
  const tooltip = document.querySelector('.active');
  expect(tooltip).not.toBe('undefined');
});

test('hide tooltip', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const popover = new Element(container);
  popover.bindToDom();

  const button = container.querySelector('.btn');
  button.click();
  button.click();
  const tooltip = document.querySelector('.active');
  expect(tooltip).toBe(null);
});
