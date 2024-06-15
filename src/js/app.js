import Element from './components/element';

const container = document.querySelector('.container');
const popover = new Element(container);

popover.bindToDom();
