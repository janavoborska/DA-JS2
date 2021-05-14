console.log('funguju');

const inputElm = document.querySelector('#input');
const tlacitko = document.querySelector('#btn');
const hlaska = document.querySelector('#hlaska');

tlacitko.addEventListener('click', (event) => {
  const text = inputElm.value;
  console.log(text);
  hlaska.innerHTML = `<p>uzivatelske jmeno ${text} jiz existuje </>`;
  event.target.textContent = 'Zkus znovu';
  //tlacitko.textContent = 'Zkus znovu';
});

const autoElm = document.querySelector('img');

document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowRight') {
    console.log('zmacknuto');
    autoElm.style.marginLeft = '10rem';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowLeft') {
    console.log('zmacknuto');
    autoElm.style.marginLeft = '0';
  }
});
