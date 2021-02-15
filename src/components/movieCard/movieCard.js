import movieCard from '../../templates/movieCard.hbs';
const mainRef = document.querySelector('main');
let id = [];
let obj;
export function apiMovieCard(movieId) {
  id = movieId;
  const keyApi = '65999cd4dc4e9b42ad69f2cfa64d7f94';
  const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=en-US`;
  return fetch(baseUrl)
  .then(res => res.json())
    .then(data => {
      obj = data;
      movieCardMurkup(data);
  })
  .catch(err => console.log(err));
}

function movieCardMurkup(data) {
  mainRef.innerHTML = movieCard(data);
  const watched = document.querySelector('.js-watched');
  const queue = document.querySelector('.js-queue');
  watched.addEventListener('click', addIntoWatched);
  queue.addEventListener('click', addIntoQueue);
  const index = id;
  const movieWatched = getWatched();
  const movieQueue = getQueue();
  for (let item of movieWatched) {
    if (index === item) {
      watched.innerHTML = 'Added to Watched';
      watched.classList.add('js-clicked');
    }
  }
  for (let item of movieQueue) {
    if (index === item) {
      queue.innerHTML = 'Added to Queue';
      queue.classList.add('js-clicked');
    }
  }
}

function addIntoWatched(e) {
  let getWatchedMovie = putWatched();
  const btn = e.target;
  btn.innerHTML = (btn.innerHTML === 'Added to Watched') ? btn.innerHTML = 'Add to Watched' : btn.innerHTML = 'Added to Watched';
  (btn.classList.contains('js-clicked')) ? btn.classList.remove('js-clicked') : btn.classList.add('js-clicked');
  localStorage.setItem('WatchedId', JSON.stringify(getWatchedMovie.movie));
  localStorage.setItem('WatchedObj', JSON.stringify(getWatchedMovie.movie));
}
function addIntoQueue(e) {
  let getQueueMovie = putQueue();
  const btn = e.target;
  btn.innerHTML = (btn.innerHTML === 'Added to Queue') ? btn.innerHTML = 'Add to Queue' : btn.innerHTML = 'Added to Queue';
  (btn.classList.contains('js-clicked')) ? btn.classList.remove('js-clicked') : btn.classList.add('js-clicked');
  localStorage.setItem('QueueId', JSON.stringify(getQueueMovie.movie));
}
function getQueue() {
  const movieStorage = localStorage.getItem('QueueId');
  if (movieStorage !== null) {
    return JSON.parse(movieStorage);
  }
  return [];
}
function getWatched() {
  const movieStorageID = localStorage.getItem('WatchedId');
  const movieStorageObj = localStorage.getItem('WatchedObj');
  if (movieStorageID !== null && movieStorageObj !== null) {
    return JSON.parse(movieStorageID, movieStorageObj);
  }
  return [];
}
function putWatched() {
  let movie = getWatched();
  let movieObj = getWatched();
  console.log(movie);
  let pushMovie = false;
  const index = movie.indexOf(id);
  if(index === -1) {
    movie.push(id);
    movieObj.push(obj);
    pushMovie = true;
  }else{
    movie.splice(index, 1);
  }
  return {movie, pushMovie, movieObj }
}
function putQueue() {
  let movie = getQueue();
  let pushMovie = false;
  const index = movie.indexOf(id);
  if(index === -1) {
    movie.push(id);
    pushMovie = true;
  }else{
    movie.splice(index, 1);
  }
  return {movie, pushMovie }
}