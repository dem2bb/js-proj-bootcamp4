// import filmTpl from '../../templates/movies.hbs';
import search from './searchByName.js';
import { insertItems, page } from '../popularMovies/fetch.js';

export const refs = {
  galleryCont: document.querySelector('.film-list'),
  searchForm: document.querySelector('#search-form'),
  input: document.querySelector('.search-form-input'),
  key: 'c1bc6964ae67d43eb6945614299c385c',
};

// function insertItems(film) {
//   const markup = film.results.map(item => filmTpl(item)).join('');
//   refs.galleryCont.innerHTML = markup;
// }

function searchPrint(event) {
  event.preventDefault();
  search.searchFilms(refs.input.value, page).then(data => insertItems(data));
}

refs.searchForm.addEventListener('submit', searchPrint);
