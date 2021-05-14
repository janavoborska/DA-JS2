const sach = [
  ['0', ' 0', '0', '0', '0 ', '-2', ' -6', ' 0'],
  ['0 ', '0 ', '0 ', ' 0', ' 0', '-1 ', '-1 ', '-1 '],
  [' 0', ' 0', '-1 ', ' 0', '-1 ', ' 0', ' 0', ' 0'],
  ['0 ', '-1 ', '1 ', ' 0', ' 0', '0 ', ' 0', ' 0'],
  ['0 ', '1 ', ' 0', ' 0', ' 0', ' 0', ' 0', '0 '],
  ['0 ', ' 0', '0 ', ' 0', '0 ', '3 ', '0 ', ' 1'],
  [' 0', '0 ', ' 0', ' 0', ' 4', ' 1', ' 1', '0 '],
  [' 0', ' 0', ' 0', '0 ', ' 0', ' 0', ' 6', '0 '],
];

sach[3][4] = 3;

const sachElm = document.querySelector('.sachovnice');
sachElm.innerHTML = sach;

/*
let i = 1;
while (i < 101) {
  console.log(i);
  i += 1;
}
*/

/*
let i = 2;
while (i <= 100) {
  console.log(i);
  i += 2;
}
*/

/*
let i = 100;
while (i >= 0) {
  console.log(i);
  i -= 2;
}
*/
/*
for (let i = 1; i < 101; i += 1) {
  console.log(i);
}

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

for (let i = 100; i >= 0; i -= 2) {
  console.log(i);
}
*/

/*
const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'misa'];

for (i = 0; i < users.length; i += 1) {
  console.log(users[i]);
}

for (i = 0; i < users.length; i += 1) {
  console.log(`${users[i]}@gmail.com`);
}


for (i = 0; i < users.length; i += 1) {
  if (users[i].length <= 4) {
    console.log(`${users[i]}@gmail.com`);
  }
}
*/

const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];

let sum = 0;
for (i = 0; i < amounts.length; i += 1) {
  sum += amounts[i];
}

console.log(sum);

/*
let sum = amounts[0];
let i = 1;

while (sum > 0) {
  sum = sum + amounts[i];
  if (sum < 0) {
    console.log(i, amounts[i]);
  }
  i += 1;
}

console.log(sum);
*/
/*
console.log('knedlik');
let sum = 0;
for (let i = 0; i < amounts.length; i++) {
  sum += amounts[i];
  if (sum <= 0) {
    console.log('stop', i, amounts[i], sum);
    break;
  }
}
/*
const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice'];
/*let vypis = '';

for (let i = 0; i < list.length; i++) {
  vypis += `<li>${list[i]}</li>`;
}

console.log(vypis);
console.log(` ${list} `);

const seznamElm = document.querySelector('ol');
seznamElm.innerHTML = vypis;
*/
/*
const shoppingList = (list) => {
  let vypis = '';
  for (let i = 0; i < list.length; i++) {
    vypis += `<li>${list[i]}</li>`;

    console.log(vypis);
  }
  return vypis;
};

/*shoppingList(list);*/
/*
const seznamElm = document.querySelector('ol');
seznamElm.innerHTML = shoppingList(list);
*/

/*
const Product1 = {
  name: 'destnik',
  price: 30,
  currency: 'EUR',
};
const productHtml = document.querySelector('#products-section');
productHtml.innerHTML = `
<div class="product">
  <h2 class="product__name">${Product1.name}</h2>
  <p class="product__price">${Product1.price}: ${Product1.currency}</p>
</div>
`;
*/
/*
const Product1 = {
  name: 'destnik',
  price: 30,
  currency: 'EUR',
};

const Product = (props) => {
  return `
<div class="product">
  <h2 class="product__name">${Product1.name}</h2>
  <p class="product__price">${Product1.price}: ${Product1.currency}</p>
</div>
`;
};

const productHtml = document.querySelector('#products-section');
productHtml.innerHTML = Product(Product1);
*/

const Products = [
  {
    name: 'destnik',
    price: 30,
    currency: 'EUR',
  },
  {
    name: 'destnik',
    price: 30,
    currency: 'EUR',
  },

  {
    name: 'destnik',
    price: 30,
    currency: 'EUR',
  },
];

const productHtml = document.querySelector('#products-section');
const Komponenta = (props) => {
  return `<div class="product">
  <h2 class="product__name">${props.name}</h2>
  <p class="product__price">${props.price}: ${props.currency}</p>
</div>
`;
};

for (let i = 0; i < Products.length; i++) {
  productHtml.innerHTML += Komponenta(Products[i]);
}

/*
Vytvořte si pole products s alespoň třemi různými produkty. Pomocí cyklu toto pole projděte a pomocí vaší komponenty zobrazte na stránce každý jednotlivý produkt.
5
*/
