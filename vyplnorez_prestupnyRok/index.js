'use strict';

console.log('funguju');

const fillcut = (str, len) => {
  if (str.length > len) {
    return str.slice(0, len);
  } else if (str.length < len) {
    return str.padStart(len, '.');
  }
  return str;
};

fillcut('borec', 3);
console.log(fillcut('borec', 3));

fillcut('bo', 5);
console.log(fillcut('bo', 5));

fillcut('borec', 5);
console.log(fillcut('borec', 5));

/*
Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkci je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
*/

/*
Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
*/

const isLeapYear = (num) => {
  if (num % 400 === 0) {
    return true;
  } else if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  }

  return false;
};

console.log(isLeapYear(1920));
console.log(isLeapYear(1900));
console.log(isLeapYear(1923));
console.log(isLeapYear(1600));
