'use strict';

console.log('funguju!');

const Bulb = () => {
  const element = document.createElement('div');

  element.classList.add('bulb');

  element.addEventListener('click', () => {
    element.classList.add('bulb--on');
  });

  return element;
};

const appElm = document.querySelector('#app');

appElm.appendChild(Bulb());
appElm.appendChild(Bulb());
appElm.appendChild(Bulb());
