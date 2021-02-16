import { languageData } from '../language-set/language-set.js';
import movieCard from '../../templates/movieCard.hbs';
import playerMarkup from '../../templates/playerMarkup.hbs';
import movieCardRu from '../../templates/movieCardRu.hbs';

const mainRef = document.querySelector('main');
let id;
let obj;
export function apiMovieCard(movieId) {
  id = movieId;
  const keyApi = '65999cd4dc4e9b42ad69f2cfa64d7f94';
  const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=${languageData.fetchLanguage}`;
  return fetch(baseUrl)
  .then(res => res.json())
    .then(data => {
      obj = data;
      movieCardMurkup(data);
  })
  .catch(err => console.log(err));
}
function movieCardMurkup(data) {
  const youTubekeyApi = 'AIzaSyARBacO_tdsZWQ8R_fw3eh8MtpLaz6SaNw';
  const youTubebaseUrl = `https://www.googleapis.com/youtube/v3/search?q=${data.original_title}&key=${youTubekeyApi}&part=snippet,id&order=date&maxResults=1`;
  languageData.language === 'RU'
    ? (mainRef.innerHTML = movieCardRu(data))
    : (mainRef.innerHTML = movieCard(data));
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
      if (languageData.language === 'EN') {
        watched.innerHTML = 'Added to Watched';
        watched.classList.add('js-clicked');
      }
      if (languageData.language === 'RU') {
        watched.innerHTML = 'Добавлено В просмотренные';
        watched.classList.add('js-clicked');
      }
    }
  }
  for (let item of movieQueue) {
    if (index === item) {
      if (languageData.language === 'EN') {
        queue.innerHTML = 'Added to Queue';
        queue.classList.add('js-clicked');
      }
      if (languageData.language === 'RU') {
        queue.innerHTML = 'Добавлено к просмотру';
        queue.classList.add('js-clicked');
      }
    }
  }
  function youtube() {
    fetch(youTubebaseUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data.items[0].id.videoId;
      })
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
  if (languageData.language === 'EN') {
    btn.innerHTML =
      btn.innerHTML === 'Added to Watched'
        ? (btn.innerHTML = 'Add to Watched')
        : (btn.innerHTML = 'Added to Watched');
    btn.classList.contains('js-clicked')
      ? btn.classList.remove('js-clicked')
      : btn.classList.add('js-clicked');
    localStorage.setItem('WatchedId', JSON.stringify(getWatchedMovie.id));
  }
  if (languageData.language === 'RU') {
    btn.innerHTML =
      btn.innerHTML === 'Добавлено в просмотренные'
        ? (btn.innerHTML = 'Добавить в просмотренные')
        : (btn.innerHTML = 'Добавлено в просмотренные');
    btn.classList.contains('js-clicked')
      ? btn.classList.remove('js-clicked')
      : btn.classList.add('js-clicked');
    localStorage.setItem('WatchedId', JSON.stringify(getWatchedMovie.id));
  }
  btn.innerHTML = (btn.innerHTML === 'Added to Watched') ? btn.innerHTML = 'Add to Watched' : btn.innerHTML = 'Added to Watched';
  (btn.classList.contains('js-clicked')) ? btn.classList.remove('js-clicked') : btn.classList.add('js-clicked');
  localStorage.setItem('WatchedId', JSON.stringify(getWatchedMovie.id));
  localStorage.setItem('WatchedObj', JSON.stringify(getWatchedMovie.obj));
}
function addIntoQueue(e) {
  let getQueueMovie = putQueue();
  const btn = e.target;
  if (languageData.language === 'EN') {
    btn.innerHTML =
      btn.innerHTML === 'Added to Queue'
        ? (btn.innerHTML = 'Add to Queue')
        : (btn.innerHTML = 'Added to Queue');
    btn.classList.contains('js-clicked')
      ? btn.classList.remove('js-clicked')
      : btn.classList.add('js-clicked');
    localStorage.setItem('QueueId', JSON.stringify(getQueueMovie.movie));
  }
  if (languageData.language === 'RU') {
    btn.innerHTML =
      btn.innerHTML === 'Добавлено к просмотру'
        ? (btn.innerHTML = 'Добавить к просмотру')
        : (btn.innerHTML = 'Добавлено к просмотру');
    btn.classList.contains('js-clicked')
      ? btn.classList.remove('js-clicked')
      : btn.classList.add('js-clicked');
    localStorage.setItem('QueueId', JSON.stringify(getQueueMovie.movie));
  }
  btn.innerHTML = (btn.innerHTML === 'Added to Queue') ? btn.innerHTML = 'Add to Queue' : btn.innerHTML = 'Added to Queue';
  (btn.classList.contains('js-clicked')) ? btn.classList.remove('js-clicked') : btn.classList.add('js-clicked');
  localStorage.setItem('QueueId', JSON.stringify(getQueueMovie.id));
  localStorage.setItem('QueueObj', JSON.stringify(getQueueMovie.obj));
}
function getQueue() {
  const movieStorageID = localStorage.getItem('QueueId');
  const movieStorageObj = localStorage.getItem('QueueObj'); 
  if (movieStorageID !== null && movieStorageObj !== null) {
    const id = JSON.parse(movieStorageID);
    const obj = JSON.parse(movieStorageObj);
    return {id, obj}
  }
  return {id: [], obj: []};
}
function getWatched() {
  const movieStorageID = localStorage.getItem('WatchedId');
  const movieStorageObj = localStorage.getItem('WatchedObj');
  if (movieStorageID !== null && movieStorageObj !== null) {
    const id = JSON.parse(movieStorageID);
    const obj = JSON.parse(movieStorageObj);
    return {id, obj}
  }
  return {id: [], obj: []};
}

function putWatched() {
  let movie = getWatched();
  const index = movie.id.indexOf(id);
  if(index === -1) {
    movie.id.push(id);
    movie.obj.push(obj);
  }else{
    movie.id.splice(index, 1);
    movie.obj.splice(index, 1);
  }
  return { id: movie.id, obj: movie.obj }
}
export { getWatched, getQueue };
function putQueue() {
  let movie = getQueue();
  const index = movie.id.indexOf(id);
  if(index === -1) {
    movie.id.push(id);
    movie.obj.push(obj);
  }else{
    movie.id.splice(index, 1);
    movie.obj.splice(index, 1);
  }
  return { id: movie.id, obj: movie.obj }
}