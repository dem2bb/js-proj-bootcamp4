import movieCard from '../../templates/movieCard.hbs';
const mainRef = document.querySelector('main');

export function apiMovieCard(movieId) {
  const keyApi = '65999cd4dc4e9b42ad69f2cfa64d7f94';
  const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=en-US`;
  return fetch(baseUrl)
    .then(res => res.json())
    .then(movieCardMurkup)
    .catch(err => console.log(err));
}

function movieCardMurkup(data) {
  mainRef.innerHTML = movieCard(data);
}
