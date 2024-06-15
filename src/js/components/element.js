import Tooltip from './tooltip';

export default class Element {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onClick = this.onClick.bind(this);
    this.tooltip = new Tooltip();
  }

  static get button() {
    return `
        <button class="btn">Click to toggle popover</button>
        `;
  }

  bindToDom() {
    this.parentEl.insertAdjacentHTML('beforeend', Element.button);

    this.parentEl.addEventListener('click', this.onClick);
  }

  onClick(e) {
    this.tooltip.showTooltip(e.target);
  }
}
