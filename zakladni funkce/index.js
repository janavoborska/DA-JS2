'use strict;';
/*
console.log('ahoj kluci');

document.write('<p class="message">ahoj</p>');

document.write('drobna zmena');

const cas = 13;
const novyCas = cas + 15;
console.log(novyCas);

let cislo1 = Math.random();
console.log(cislo1);

let cislo2 = Math.random();
console.log(cislo2);

const cislo3 = Math.random();
console.log(cislo3);

const cislo4 = Math.random();
console.log(cislo4);

const cislo5 = Math.random();
console.log(cislo5);

let wageInEur = 20;
let wageInCzk = Math.round(wageInEur * 26.58);

console.log(wageInCzk);
document.write('<h1>Mzda v korunach: ' + wageInCzk + '</h1>');
/*
let start = 15;
let delka = 16;
let konec = 15 - 24 + delka;
console.log(konec);


let listek = 12;
let pocetNavstevniku = 174;
let predstaveni = 15;
let prijem = listek * pocetNavstevniku * predstaveni;
console.log(prijem);

let listek1 = 12;
let listekStudent = 12 * 0.65;
let pocetNavstevniku1 = 174 * 0.6;
pocetStudentu = 174 * 0.4;
let predstaveni1 = 15;
let prijem1 =
  listek1 * pocetNavstevniku1 * predstaveni1 +
  listekStudent * pocetStudentu * predstaveni1;
console.log(prijem1);
*/
/*const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;
document.write(konec);


const jemno = prompt('Zadejte cele sve jmeno');
const vek = Number(prompt('Zadejte svuj vek'));
const vystup = jemno + ', vek: ' + vek;
document.write(vystup);


let hodinovaSazba = Number(prompt('Zadejte svou hodinovou sazbu'));
const mzda = Number(hodinovaSazba * 8 * 21);
document.write('Vase hruba mzda cinni: ' + mzda);


let hodinovaSazba = Number(prompt('Zadejte svou hodinovou sazbu'));
let hodiny = Number(prompt('Zadejte odpracovane hodiny denne'));
let dny = Number(prompt('Zadejte odpracovane deny'));
const mzda = Number(hodinovaSazba * hodiny * dny);
document.write('Vase hruba mzda cinni: ' + mzda);

const user1 = {
  fullName: 'Lubomír Větvička',
  login: 'lubos', 
  cartItems: 0,
};


const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

const { city, district } = apartment;
console.log(city, district);

apartment.status = 'taken';


const book1 = {
  name: 'Babicka',
  author: 'Nemcova',
  sites: 230,
  type: {
    forWhom: 'children',
    status: 'obligatory',
  },
};


const jmeno = prompt('Zadejte cele sve jmeno');
const vek = Number(prompt('Zadejte svuj vek'));

person = {
  name: jmeno,
  age: vek,
};

console.log(person);


const den = Number(prompt('Zadejte den ve formatu 00'));
const mesic = Number(prompt('Zadejte mesic ve formatu 00'));
const rok = Number(prompt('Zadejte rok'));

const vystup = den + '.' + mesic + '.' + rok;
12;
document.write(vystup);
document.write(
  '<p class="date"><span class="day">' +
    den +
    '</span>.<span class="month">' +
    mesic +
    '</span>.<span class="year">' +
    rok +
    '</span></p>',
);
*/
/*
const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};

console.log(flight.cityTo);

const { baglimit: maxRozmery } = flight;
console.log(maxRozmery);

const { baglimit } = flight;
console.log(baglimit);
/*totot je to same, ale bez prejmenovani
 */
/*
console.log(flight.baglimit.hand_width);
console.log(flight.baglimit.hand_height);
console.log(flight.baglimit.hand_length);
console.log(flight.baglimit.hand_weight);
console.log(flight.baglimit.hold_width);
console.log(flight.baglimit.hold_height);
console.log(flight.baglimit.hold_length);
console.log(flight.baglimit.hold_dimensions_sum);
console.log(flight.baglimit.hold_weight);

const { hand_height } = baglimit;
console.log(hand_height);
/*opet to same pro hand_height, ale jinym zapisem
 */

/*
const conversion = flight.conversion.EUR;
const bags_price = flight.bags_price[2];
const totalPrice = conversion * bags_price;
console.log(totalPrice);
*/

/*
Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.write vypíše její ekvivalent ve stupních Celsia.
*/

/*
Mějme v proměnné x uloženo nějaké desetinné číslo. Pomocí funkce Math.round jej můžeme zaokrouhlit na celá čísla takto.

> Math.round(x)
Co kdybychom však chtěli zaokrouhlit na desetiny, setiny nebo třeba celé stovky? Napište program, který pomocí funkce Math.round

zaokrouhlí číslo x s přesností na desetiny,
zaokrouhlí číslo x s přesností na setiny,
zaokrouhlí číslo x s přesností na celé stovky.

vystačíš si se zaokrouhlováním na celá čísla:
3.51634 zaokrouhlení na dvě desetinná místa -> Math.round(3.51634*100)/100 == 3.52
jinak
var profits=2489.8237

profits.toFixed(3) //returns 2489.824 (zaokrouhleni nahoru)

profits.toFixed(2) //returns 2489.82

profits.toFixed(7) //returns 2489.8237000 (doplneni)

Math.round(4.5628*100)/100
4.56
Math.round(4.5628*1000)/1000
4.563
math.round(45628/100)*100
Math.round(45628/100)*100
45600

Házení kostkou
zapni hlavu
Vymyslete jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.
*/
/*
let nahodneCislo = Math.round(Math.random() * 5) + 1;
console.log(nahodneCislo);
*/

/*
Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.
*/

/* Představte si, že máme v proměnné se jménem x uloženo nějaké desetinné číslo a v proměnné k údaj na kolik cifer chceme zaokrouhlovat. Například k=3 znamená, že chceme zaokrouhlit na tisíciny. Naopak k=-2 znamená, že zaokrouhlujeme na celé stovky. Hodnota k=0 tedy znamená běžné zaokrouhlování na jednotky.

Sestavte s pomocí funkce Math.round program, který zaokrouhlí číslo x na zadaný počet cifer k.
*/
/*
const x = 0.1456;
let k = 3;

let zaokr = Math.round(x * (10 ^ k)) / (10 ^ k);
console.log(zaokr);
*/
const x = 155698.456213;
let k = -3;

let zaokr = Math.round(x * 10 ** k) / 10 ** k;
console.log(zaokr);
