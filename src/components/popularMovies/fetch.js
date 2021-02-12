import filmTpl from '../../templates/movies.hbs';
import removeLoader from '../loader/remove-loader.js';
import { genres } from '../../index.js';

const refs = {
  key: 'c1bc6964ae67d43eb6945614299c385c',
  galleryCont: document.querySelector('.film-list'),
};
export function fetchMovies() {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${refs.key}`)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
      insertItems(data);
    }, 1000);
  });
}
export function insertItems(film) {
  const markup = film.results
    .map(item => {
      let movieGenres = [];
      item.genre_ids.forEach(element => {
        const genreName = genres.find(item => item.id === element);
        movieGenres.push(genreName.name);
      });
      item.genre_ids = movieGenres;
      return filmTpl(item);
    })
    .join('');
  refs.galleryCont.innerHTML = markup;
  removeLoader();
}
export function fetchGenres() {
  const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${refs.key}&language=en-US`;
  return fetch(genreListUrl)
    .then(res => res.json())
    .then(data => data.genres)
    .catch(err => console.log(err));
}
