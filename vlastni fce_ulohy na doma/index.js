/*
const parseDate = (retezec) => {
  const datum = `${retezec}`;
  const datumObject = {
    den: datum.slice(0, 2),
    mesic: datum.slice(3, 5),
    rok: datum.slice(6, 10),
  };
  return datumObject;
};

console.log(parseDate('08.12.1981'));
*/

const parseDate = (retezec) => {
  const datumObject = {
    den: Number(retezec.slice(0, 2)),
    mesic: Number(retezec.slice(3, 5)),
    rok: Number(retezec.slice(6, 10)),
  };
  return datumObject;
};

console.log(parseDate('08.12.1981'));

const formatDate = (objektDatum) => {
  const retezec1 =
    '"' +
    String(objektDatum.den.padStart(2, '0')) +
    '.' +
    String(objektDatum.mesic.padStart(2, '0')) +
    '.' +
    String(objektDatum.rok) +
    '"';

  return retezec1;
};

const objektDatum = {
  den: '12',
  mesic: '5',
  rok: '2017',
};

const objektDatum1 = {
  den: '2',
  mesic: '11',
  rok: '1917',
};
/*
const { den, mesic, rok } = objektDatum;
*/
console.log(formatDate(objektDatum));
console.log(formatDate(objektDatum1));

const max3 = (cislo1, cislo2, cislo3) => {
  if (cislo1 > cislo2) {
    if (cislo1 > cislo3) {
      return cislo1;
    } else {
      return cislo3;
    }
  } else if (cislo2 > cislo3) {
    if (cislo2 > cislo1) {
      return cislo2;
    } else {
      return cislo1;
    }
  }
};

console.log(max3(6, 3, 3));

/* nebo*/

const maxLukas = (cislo1, cislo2, cislo3) => {
  let maximum = cislo1;
  if (cislo2 > maximum) {
    maximum = cislo2;
  }
  if (cislo3 > maximum) {
    maximum = cislo3;
  }
  return maximum;
};
console.log(maxLukas(7, 3, 7));

const round = (x) => {
  let vstupniCislo = Math.trunc(x);

  if (x - vstupniCislo < 0.5) {
    return Math.floor(x);
  } else if (x - vstupniCislo > 0.5) {
    return Math.ceil(x);
  } else if (vstupniCislo % 2 === 0) {
    return Math.floor(x);
  } else if (vstupniCislo % 2 !== 0) {
    return Math.ceil(x);
  }
};

console.log(round(13.5));
console.log(round(18.5));
console.log(round(5.35));
console.log(round(5.85));
