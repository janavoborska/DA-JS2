'use strict';
/*
const podcast1 = {
  num: '126',
  title: 'Robot, který snědl koblihu',
  guest: 'Radovan Siwek',
};

console.log('funguju!', podcast1);

const Podcast = (props) => {
  return `<div class="episodes-list">
      <div class="episode">
        <div class="episode__num">${props.num}</div>
        <div class="episode__body">
          <div class="episode__title">${props.title}</div>
          <div class="episode__guest">host: ${props.guest}</div>
        </div>
      </div>`;
};

Podcast(podcast1);
console.log(Podcast(podcast1));

const epizoda = document.querySelector('.episodes-list');

epizoda.innerHTML = Podcast(podcast1);
*/

const episodes = [
  {
    num: 127,
    title: 'Hledání plyšového Yettiho',
    guest: 'Vojtěch Ryba',
  },
  {
    num: 128,
    title: 'Moderní hrachová polévka',
    guest: 'Kamila Štancová',
  },
  {
    num: 129,
    title: 'Poloautomatické zrcadlo',
    guest: 'Janka Janovská',
  },
  {
    num: 130,
    title: 'Máčené hlavy parlamentu',
    guest: 'Jonáš Daněk',
  },
  {
    num: 131,
    title: 'Služby na hraně přívěsu',
    guest: 'Tereza Křivánková',
  },
  {
    num: 132,
    title: 'Klasifikace sněžných klokanů',
    guest: 'Josef Stix',
  },
  {
    num: 133,
    title: 'Rybolov v Oceánu bouří',
    guest: 'Ludmila Gajová',
  },
];

const epizoda = document.querySelector('.episodes-list');

const Podcast = (props) => {
  return `<div class="episodes-list">
      <div class="episode">
        <div class="episode__num">${props.num}</div>
        <div class="episode__body">
          <div class="episode__title">${props.title}</div>
          <div class="episode__guest">host: ${props.guest}</div>
        </div>
      </div>`;
};

Podcast(episodes);

for (let i = 0; i < episodes.length; i++) {
  epizoda.innerHTML += Podcast(episodes[i]);
}
