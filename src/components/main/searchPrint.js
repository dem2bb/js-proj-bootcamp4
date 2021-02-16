import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error} from "@pnotify/core";
import debounce from "lodash/debounce";
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

  const letterNumber = /^[0-9a-zA-Zа-яА-Я]+$/;
  if (!refs.input.value.match(letterNumber)) {
    error({
      title: 'Wrong input.',
    text: 'The field may contain letters and numbers only.',
    delay: 3000,
    closerHover: true,
  })
    return 
  }
  
  search.searchFilms(refs.input.value, page).then(data => insertItems(data));
}

refs.searchForm.addEventListener('submit', searchPrint);
refs.input.addEventListener('input', debounce(searchPrint, 500));