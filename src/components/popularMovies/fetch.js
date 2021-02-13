import filmTpl from '../../templates/movies.hbs';
import removeLoader from '../loader/remove-loader.js';
import { genres } from '../../index.js';
import one from '../../templates/firstPage.hbs';
import multi from '../../templates/mulltipage.hbs';

const refs = {
  key: 'c1bc6964ae67d43eb6945614299c385c',
  galleryCont: document.querySelector('.film-list'),
};
let page = 1;
let basePagUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${refs.key}&page=`;
export function fetchMovies() {
  fetch(basePagUrl + page)
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
      item.vote_average = item.vote_average.toFixed(1)
      item.release_date=parseInt(item.release_date)
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
let pageDiv = document.querySelector('#pagDiv');

function pagMarkup() {
  if (page === 1) {
    pageDiv.innerHTML = one({page});
  }
  if (page > 1) {
    pageDiv.innerHTML = multi({page});
    let decPage = document.querySelector('#dec');
    decPage.addEventListener('click', decrement);
  }
}
pagMarkup();

let incPage = document.querySelector('#inc');
incPage.addEventListener('click', increment);

function increment() {
  page += 1;
  fetchMovies()
  pagMarkup();
  let incPage = document.querySelector('#inc');
  incPage.addEventListener('click', increment);
}

function decrement() {
  if (page > 1) {
    page -= 1;
    fetchMovies()
  }
}
