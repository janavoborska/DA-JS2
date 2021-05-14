/*
const stedryDen = dayjs('2021-12-24');
const dnes = dayjs();

if (dnes.isAfter(stedryDen)) {
  console.log('Musíš počkat na příští rok');
} else {
  console.log('Už brzy přijde Ježíšek!');
}
*/
const email = prompt('zadejte e-mail');

if (validator.isEmail(email)) {
  console.log('e-mail v porardku');
} else {
  console.log('Neplatny e-mail');
}

if (validator.isEmail(email)) {
  const pElm = document.querySelector('p');
  pElm.innerHTML = 'E-mail v poradku';
} else {
  const pElm = document.querySelector('p');
  pElm.innerHTML = 'Neplatny e-mail';
}

if (validator.isEmail(email)) {
  const pElm = document.querySelector('p');
  pElm.classList.add('msg--valid');
} else {
  const pElm = document.querySelector('p');
  pElm.classList.add('msg--invalid');
}

/*
Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu . V opačném případě použijte třídu msg--invalid. Třídy nastylujte například tak, že msg--valid bude mí zelené pozadí a  naopak červené.
*/
