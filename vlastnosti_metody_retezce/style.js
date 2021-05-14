/* const email = prompt('zadejte email');

console.log(email);

const atIndex = email.indexOf('@');
console.log(atIndex);

const username = email.slice(0, 13);
console.log(username);

const domin = email.slice(14);
console.log(domin);

const objekt = {
  name: username,
  domena: domin,
};

console.log(objekt);

jana.dostalov@seznam.cz
Voro*/
/*
const uliceACislo = prompt('Zadejte ulici a cislo domu');
const mesto = prompt('Zadejte mesto');
const psc = prompt('Zadejte psc');

const address = `
<div class="address">
  <p>${uliceACislo}<p>
  <p>${psc} ${mesto}</p>
</div>`;

document.write(address);
*/

/*
const heslo = prompt('Zadejte heslo');
console.log(heslo);

if (heslo.length < 8) {
  console.log('Slabe heslo');
}

const vek = Number(prompt('Zdejte vek'));

if (vek >= 65) {
  console.log('Vek v poradku');
} else {
  console.log('Nizky vek');
}
*/

/*
let vek = Number(prompt('zadejte vek'));
const plnaCena = 12;
let cena;

if (vek < 6) {
  cena = 0;
} else if (vek < 26) {
  cena = Math.round(0.65 * plnaCena);
} else if (vek < 65) {
  cena = plnaCena;
} else {
  cena = 0.5 * plnaCena;
}

console.log(cena);

const zprava = `
<div class="hlaska">
  <p>Dekujeme za zajem o nase divadlo, cena Vasi vstupenky je ${cena} EUR12<p>
</div>`;

document.write(zprava);
*/
/*
const jmeno = prompt('Zadejte krestni jmeno bez diakritiky');
console.log(jmeno);

const prijmeni = prompt('Zadejte prijmeni bez diakritiky');
console.log(prijmeni);

const jmenoOk = jmeno.trim();
const prijmeniOK = prijmeni.trim();
console.log(jmenoOk);

const jmenoMail = jmenoOk.slice(0, 3);
const prijmeniMail = prijmeniOK.slice(0, 5);
console.log(jmenoMail);

const mail = document.write(`${prijmeniMail}${jmenoMail}@fit.cvut.cz`);
*/
/*
const pocet = Number(prompt('zadej pocet kusu'));
let cena = 120;

if (pocet < 50) {
  cena = 300;
} else if (pocet >= 50 && pocet < 200) {
  cena = 250;
} else if (pocet >= 200 && pocet < 500) {
  cena = 200;
} else if (pocet >= 500 && pocet < 1000) {
  cena = 150;
}

const suma = pocet * cena;
document.write(suma);
*/

/*
const sazba = Number(prompt('zadejte hodinovu sazbu'));
const uvazek =
  (Number(prompt('zadejte velikost uvazku v procentech')) / 100) * 8;

const hrubaMzda = sazba * uvazek * 21;
document.write(hrubaMzda);

const superHrubaMzda = Math.ceil(hrubaMzda * 1.338);
document.write('<br></br>');
document.write(superHrubaMzda);

const cistaMzda = Math.floor(
  hrubaMzda * 0.89 - 0.15 * (Math.ceil(superHrubaMzda / 100) * 100) + 2070,
);
document.write('<br></br>');
document.write(cistaMzda);

*/

/*
const cislo = Number(prompt('zvolte cele cislo z intervalu 0-36'));
let padlo = 'cervena';

if (cislo > 0 && cislo <= 10) {
  if (cislo % 2 === 0) {
    padlo = 'cerna';
  } else {
    padlo = 'cervena';
  }
} else if (cislo >= 19 && cislo <= 28) {
  if (cislo % 2 === 0) {
    padlo = 'cerna';
  } else {
    padlo = 'cervena';
  }
} else if (cislo === 0) {
  padlo = 'nula';
} else {
  if (cislo % 2 === 0) {
    padlo = 'cervena';
  } else {
    padlo = 'cerna';
  }
}
console.log(padlo);

*/

const rok = Number(prompt('zvolte rok'));
let urceni = 'prestupny';

if (rok % 400 === 0) {
  urceni = 'prestupny rok';
} else if (rok % 4 === 0 && rok % 100 !== 0) {
  urceni = 'prestupny rok';
} else {
  urceni = 'neprestupny rok';
}

document.write(urceni);
