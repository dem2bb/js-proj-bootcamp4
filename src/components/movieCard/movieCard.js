import movieCard from '../../templates/movieCard.hbs';
const mainRef = document.querySelector('main');
let id = [];
export function apiMovieCard(movieId) {
  id = movieId;
  const keyApi = '65999cd4dc4e9b42ad69f2cfa64d7f94';
  const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=en-US`;
  return fetch(baseUrl)
  .then(res => res.json())
  .then(movieCardMurkup)
  .catch(err => console.log(err));
}

function movieCardMurkup(data) {
  mainRef.innerHTML = movieCard(data);
  const watched = document.querySelector('.js-watched');
  const queue = document.querySelector('.js-queue');
  watched.addEventListener('click', addIntoWatched);
  queue.addEventListener('click', addIntoQueue);
    if (qwerty.pushMovie === true) {
      watched.disabled = true;
  }
}

function addIntoWatched(e) {
  let qwerty = putWatched();
  const btnW = e.target;

  // btnW.innerText = 'Added to Watched';
  localStorage.setItem('WatchedId', JSON.stringify(qwerty.movieW));
}
function addIntoQueue(e) {
  let movieQ = getQueue();
  const index = movieQ.indexOf(id);
  if(index === -1) {
    movieQ.push(id);
  }else{
    movieQ.splice(index, 1);
  }
  const btnQ = e.target;
  btnQ.disabled = true;
  btnQ.innerText = 'Added to Queue';
  localStorage.setItem('QueueId', JSON.stringify(movieQ));
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
  let movieW = getWatched();
  let pushMovie = false;
  const index = movieW.indexOf(id);
  if(index === -1) {
    movieW.push(id);
    pushMovie = true;
  }else{
    movieW.splice(index, 1);
  }
  return {movieW, pushMovie }
}