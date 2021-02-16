import movieCard from '../../templates/movieCard.hbs';
const mainRef = document.querySelector('main');
let id;
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
  localStorage.setItem('WatchedId', JSON.stringify(getWatchedMovie.id));
  localStorage.setItem('WatchedObj', JSON.stringify(getWatchedMovie.obj));
}
function addIntoQueue(e) {
  let getQueueMovie = putQueue();
  const btn = e.target;
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