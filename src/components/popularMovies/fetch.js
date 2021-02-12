import filmTpl from '../../templates/movies.hbs';
import removeLoader from '../loader/remove-loader.js';
const refs = {
  galleryCont: document.querySelector('.film-list'),
};
console.log(removeLoader);
fetch(
  'https://api.themoviedb.org/3/trending/movie/day?api_key=c1bc6964ae67d43eb6945614299c385c',
)
  .then(res => res.json())
  .then(data => {
    setTimeout(() => {
      insertItems(data);
    }, 1000);
  });

function insertItems(film) {
  const markup = film.results.map(item => filmTpl(item)).join('');
  refs.galleryCont.innerHTML = markup;
  removeLoader();
}
