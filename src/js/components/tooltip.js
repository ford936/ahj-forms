export default class Tooltip {
  static get markup() {
    return `
        <div class="title">Popover title</div>
        <div class="text">And here's some amazing content. It's very engaging. Right?</div>
        `;
  }

  // eslint-disable-next-line class-methods-use-this
  showTooltip(el) {
    if (!document.querySelector('.tooltip__container')) {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip__container');
      tooltip.classList.add('active');
      tooltip.insertAdjacentHTML('beforeend', Tooltip.markup);

      document.body.appendChild(tooltip);

      const { left, top } = el.getBoundingClientRect();

      tooltip.style.left = `${left - tooltip.offsetWidth / 2 + el.offsetWidth / 2}px`;
      tooltip.style.top = `${top - tooltip.offsetHeight - 5}px`;
    } else {
      document.body.querySelector('.tooltip__container').classList.toggle('active');
    }
  }
}
