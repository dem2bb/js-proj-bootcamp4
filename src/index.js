import './styles.css';
import './components/example/header.js';
import './components/header/header.js';
import './components/popularMovies/fetch.js';
import './components/main/searchPrint.js';
import { fetchMovies } from './components/popularMovies/fetch.js';
import { fetchGenres } from './components/popularMovies/fetch.js';
import './components/movieCard/movieCard.js';


export let genres = [];

fetchGenres().then(res => {
  genres = res;
  fetchMovies();
});
