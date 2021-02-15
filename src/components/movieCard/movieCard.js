import movieCard from '../../templates/movieCard.hbs';
import playerMarkup from '../../templates/playerMarkup.hbs';

const mainRef = document.querySelector('main');
let id = [];
export function apiMovieCard(movieId) {
  id = movieId;
  console.log(id);
  const keyApi = '65999cd4dc4e9b42ad69f2cfa64d7f94';
  const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=en-US`;
  return fetch(baseUrl)
    .then(res => res.json())
    .then(movieCardMurkup)
    .catch(err => console.log(err));
}

function movieCardMurkup(data) {
  const youTubekeyApi = 'AIzaSyAS0B9lwe077Aii-NL9mosAvqPueKjnz0E';
  const youTubebaseUrl = `https://www.googleapis.com/youtube/v3/search?q=${data.original_title}&key=${youTubekeyApi}&part=snippet,id&order=date&maxResults=1`;

  mainRef.innerHTML = movieCard(data);
  document.querySelector('#aa').addEventListener('click', openVideo);

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
  function youtube() {
    fetch(youTubebaseUrl)
      .then(res => res.json())
      .then(data => data.items[0].id.videoId)
      .then(
        data =>
          (document.querySelector(
            '#playerContainer',
          ).innerHTML = `<div id="overlay" hidden><div id="modal_form" class="playerDiv" hidden><iframe id="player" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/${data}?enablejsapi=1"
          frameborder="0"></iframe></div><button class="modal_close" type="button">Закрыть</button></div>`),
      );
  }
  youtube();
}
function openVideo() {
  console.log('Открыть модалку с видео');
  document.querySelector('.playerDiv').hidden = false;
  document.querySelector('#overlay').hidden = false;
}
function addIntoWatched(e) {
  let getWatchedMovie = putWatched();
  const btn = e.target;
  btn.innerHTML =
    btn.innerHTML === 'Added to Watched'
      ? (btn.innerHTML = 'Add to Watched')
      : (btn.innerHTML = 'Added to Watched');
  btn.classList.contains('js-clicked')
    ? btn.classList.remove('js-clicked')
    : btn.classList.add('js-clicked');
  localStorage.setItem('WatchedId', JSON.stringify(getWatchedMovie.movie));
}
function addIntoQueue(e) {
  let getQueueMovie = putQueue();
  const btn = e.target;
  btn.innerHTML =
    btn.innerHTML === 'Added to Queue'
      ? (btn.innerHTML = 'Add to Queue')
      : (btn.innerHTML = 'Added to Queue');
  btn.classList.contains('js-clicked')
    ? btn.classList.remove('js-clicked')
    : btn.classList.add('js-clicked');
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
  const movieStorage = localStorage.getItem('WatchedId');
  if (movieStorage !== null) {
    return JSON.parse(movieStorage);
  }
  return [];
}
function putWatched() {
  let movie = getWatched();
  let pushMovie = false;
  const index = movie.indexOf(id);
  if (index === -1) {
    movie.push(id);
    pushMovie = true;
  } else {
    movie.splice(index, 1);
  }
  return { movie, pushMovie };
}
function putQueue() {
  let movie = getQueue();
  let pushMovie = false;
  const index = movie.indexOf(id);
  if (index === -1) {
    movie.push(id);
    pushMovie = true;
  } else {
    movie.splice(index, 1);
  }
  return { movie, pushMovie };
}
