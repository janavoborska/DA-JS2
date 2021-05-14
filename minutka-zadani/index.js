'use strict';

console.log('funguju!');

const zvonek = document.querySelector('.alarm');

const zvoneni = () => {
  zvonek.classList.add('alarm--ring');
  const audioElm = document.querySelector('audio').play();
  //audioElm.play();
};

//setTimeout(zvoneni, 3000);

const cas = Number(prompt('zadejte vteriny')) * 1000;

//setTimeout(zvoneni, cas);

const timeOut = setTimeout(zvoneni, cas);

const buttonElm = document.querySelector('.zastav');
console.log(buttonElm);

buttonElm.addEventListener('click', () => {
  clearTimeout(timeOut);
  const audioElm2 = document.querySelector('audio');
  audioElm2.pause();
  zvonek.classList.remove('alarm--ring');
});

//const timerId = setTimeout(() => console.log('ahoj'), 5000);
//setTimeout(() => clearTimeout(timerId), 2000);
