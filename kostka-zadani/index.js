'use strict';

console.log('funguju!');

const zmenKostku = (cisloNaKostce) => {
  const srcElm = document.querySelector('.dice');
  srcElm.src = `img/side${cisloNaKostce}.svg`;
};

let side = 1;
document.addEventListener('keypress', (event) => {
  if (event.code !== 'Space') {
    return;
  }

  side += 1;
  if (side > 6) {
    side = 1;
  }
  zmenKostku(side);
});

document.addEventListener('keydown', () => {
  console.log('Nastal keydown');
});

document.addEventListener('keyup', () => {
  console.log('Nastal keyup');
});

/*
Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

Rozumným postupem je vytvořit si proměnnou side, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí mezerníku navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut src.
*/
