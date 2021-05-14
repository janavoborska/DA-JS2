console.log('funguju');

const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx'];
const osoby = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 13, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
];
/*
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]++;
  console.log(sum);
}

console.log('Prumer: ', sum / numbers.length);

//druhy zpusob
/*let sum = 0;
numbers.forEach((number) => (sum += number));
console.log(sum / numbers.length);

//osoby.forEach((osoba) => console.log(osoby.age));
/*Napište cyklus, který spočítá průměr čísel v poli numbers. Napište tento cyklus ve staré formě for a v nové formě forEach.
Pomocí metody forEach napište cyklus, který vypíše do konzole poslední písmeno z každného jména v poli names.
Pomocí funkce forEach vypište do konzole postupně věk každé osoby z pole osoby.
Pomocí metody some zjistěte, jestli jsou v poli numbers nějaká čísla dělitelná 11.
Pomocí metody every zjistěje, jestli v poli osoby platí, že každá osoba je vždy buď muž nebo žena.
*/
//jednohubky
const filterNumbers = numbers.filter((item) => item % 2 === 0);

console.log(filterNumbers);
//Pomocí metody filter získejte z pole numbers pouze ta čísla, která jsou sudá.

const dlouhaJmena = names.filter((item) => item.length > 4);
console.log(dlouhaJmena);
//Pomocí metody filter získejte z pole names pouze ta jména, která jsou delší než 4 znaky.

const dospeli = osoby.filter((item) => item.age >= 18);
console.log(dospeli);
//Pomocí metody filter získejte z pole osoby pouze dospělé lidi.

const dospeliMuzi = osoby.filter(
  (item) => item.age >= 18 && item.gender === 'male',
);
console.log(dospeliMuzi);
//Pomocí metody filter získejte z pole osoby pouze dospělé muže.

const tri = numbers.map((item) => item / 3.0);
console.log(tri);
//Pomocí metody map vydělte všecha čísla v poli numbers třemi.

const retezec = numbers.map((item) => item.toString());
console.log(retezec);
//Pomocí metody map převeďte všechna čísla v poli numbers na řetězce.

const retezecJmeno = names.map((item) => `<li>${item}</li>`);
console.log(retezecJmeno);
//Pomocí metody map vytvořte pole, ve kterém budou všechna jména z pole names zabalená do li tagu. Jméno Petr tak dopadne jako <li>Petr</li>.

const mail = names.map((item) => `${item}@gmail.com`);
console.log(mail);
//Použijte pole osoby a pomocí metody map vytvořte pro každou osobu email ve formátu petr@gmail.com.

const tasks = [
  {
    name: 'Vyprat košile',
    due: {
      time: 3,
      unit: 'day',
    },
    notify: {
      time: 1,
      unit: 'day',
    },
    done: false,
  },
  {
    name: 'Nakoupit na nedělní oběd',
    due: {
      time: 2,
      unit: 'day',
    },
    notify: {
      time: 6,
      unit: 'hour',
    },
    done: false,
  },
  {
    name: 'Zopakovat si funkce vyšších řádů',
    due: {
      time: 8,
      unit: 'hour',
    },
    notify: {
      time: 30,
      unit: 'minute',
    },
    done: true,
  },
  {
    name: 'Dát výpověď v práci',
    due: {
      time: 14,
      unit: 'day',
    },
    notify: {
      time: 4,
      unit: 'day',
    },
    done: false,
  },
  {
    name: 'Jít si zaběhat',
    due: {
      time: 2,
      unit: 'day',
    },
    notify: {
      time: 1,
      unit: 'hour',
    },
    done: true,
  },
];

const nazvy = tasks.map((item) => item.name);
console.log(nazvy);
//Vytvořte pole, které obsahuje pouze názvy všech úkolů.

const hotovo = tasks.filter((item) => item.done === true);
console.log(hotovo);
//Vytvořte pole, které obsahuje objekty pouze těch úkolů, které již byly splněny.
//Vytvořte pole, které obsahuje objekty pouze těch úkolů, které mají být splněný během následujících tří dnů.
//Máme-li pole úkolů, které mají být splněny do tří dnů, zjistěte, zda jsou všechny úkoly z tohoto seznamu již splněny.
