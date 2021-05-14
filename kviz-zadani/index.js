'use strict';

console.log('funguju!');

const questionElm = document.querySelector('.question');

questionElm.textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

console.log('ahoj');

let odpoved = prompt('Uveďteodpoved');

const responseElm = document.querySelector('.answer__text');
responseElm.textContent = odpoved;

const answerElm = document.querySelector('.answer');

if (odpoved === 'Bell') {
  answerElm.classList.add('answer--correct');
} else {
  answerElm.classList.add('answer--wrong');
}
