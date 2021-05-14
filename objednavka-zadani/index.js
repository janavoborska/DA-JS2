'use strict';

console.log('it works');

const btnElm = document.querySelector('#btn-order');
btnElm.textContent = 'Kontroluji dostupnost';

setTimeout(() => {
  btnElm.textContent = 'Objednat';
  btnElm.disabled = false;
}, 8000);

btnElm.addEventListener('click', () => {
  btnElm.textContent = 'Objednano';
});

document.addEventListener('click', () => {
  btnElm.textContent = 'objednano';
});

/*Zařiďte, aby při načtení stránky tlačítko obsahovalo zprávu Kontroluji dostupnost…
Přidejte do stránky zpoždění pomocí funkce setTimeout, která zařídí, že 8 vteřin po načtení stránky se zpráva na tlačítku změní na Objednat.
Tlačítka mají speciální HTML atribut s názvem disabled. Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. Přidejte tento atribut do HTML kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné. Až po uplynutí časovače jej zpřístupněte nastavením vlastnosti disabled na false.
*/
