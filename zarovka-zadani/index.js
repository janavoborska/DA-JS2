'use strict';

console.log('funguju!');
const zarovkaElm = document.querySelector('.bulb');
console.log(zarovkaElm);

document.addEventListener('keyup', () => {
  zarovkaElm.classList.toggle('bulb--on');
});

/*Pomocí JavaScriptu zařiďte, aby se při stisknutí libovolné klávesy na stránce přidala k elementu žárovky CSS třída bulb--on. Žárovka by se takto měla rozsvítit.
Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula. Opakovaným mačkávním kláves ji tak můžeme rozsvěcovat a zhasínat.
*/
