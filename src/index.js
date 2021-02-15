import './styles.css';
import './components/example/header.js';
import './components/header/header.js';
import './components/popularMovies/fetch.js';
import './components/main/searchPrint.js';
import './components/footer/footer.js';

import { fetchMovies } from './components/popularMovies/fetch.js';
import { fetchGenres } from './components/popularMovies/fetch.js';
import './components/movieCard/movieCard.js';
import './components/popularMovies/openFilm.js';
import './components/language-set/language-set.js';
import './components/render/render.js';
export let genres = [];

fetchGenres().then(res => {
  genres = res;
  fetchMovies();
});
