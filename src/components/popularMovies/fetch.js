import filmTpl from '../../templates/movies.hbs';
import { genres } from '../../index.js';

const refs = {
  key: 'c1bc6964ae67d43eb6945614299c385c',
  galleryCont: document.querySelector('.film-list'),
};
export function fetchMovies() {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${refs.key}`)
    .then(res => res.json())
    .then(data => insertItems(data));
}

export function insertItems(film) {
  const markup = film.results
    .map(item => {
      let movieGenres = [];
      item.genre_ids.forEach(element => {
        // console.log(genres);
        const genreName = genres.find(item => item.id === element);
        movieGenres.push(genreName.name);
      });
      item.genre_ids = movieGenres;
      return filmTpl(item);
    })
    .join('');
  refs.galleryCont.innerHTML = markup;
}

export function fetchGenres() {
  const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${refs.key}&language=en-US`;
  return fetch(genreListUrl)
    .then(res => res.json())
    .then(data => data.genres)
    .catch(err => console.log(err));
}
