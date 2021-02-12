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
}

function addIntoWatched(e) {
  const btn = e.target;
  btn.disabled = true;
  btn.innerText = 'Added to Watched';
  localStorage.setItem('WatchedId', JSON.stringify(id));
}
function addIntoQueue(e) {
  const btn = e.target;
  btn.disabled = true;
  btn.innerText = 'Added to Queue';
  localStorage.setItem('QueueId', JSON.stringify(id));
}
