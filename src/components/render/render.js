import '../header/header.js';
import { getWatched, getQueue } from '../movieCard/movieCard.js';
import movie from '../../templates/movies.hbs';

refs.linkLibrary.addEventListener('click', renderMyLibrary);
refs.buttonWatch.addEventListener('click', renderWatched);
refs.buttonQueue.addEventListener('click', renderQueue);
const arrHtml = [];

function renderMyLibrary() {
  if (arrHtml.length > 0) {
    console.log('queue');
    arrHtml.length = 0;
  }
  const libraryId = getWatched();
  libraryId.forEach(
    item => fetchItem(item),
    //console.log(arrHtml);
  );
  setTimeout(() => rend(arrHtml), 300);
}

function renderWatched() {
  const watchedArr = getWatched();
  arrHtml.length = 0;
  watchedArr.forEach((item, index) => {
    fetchItem(item, index);
  });
  setTimeout(() => rend(arrHtml), 300);
}

function renderQueue() {
  const queueArr = getQueue();
  arrHtml.length = 0;
  if (arrHtml.length !== queueArr.length) {
  }
  queueArr.forEach((item, index) => {
    fetchItem(item, index);
  });

  setTimeout(() => rend(arrHtml), 300);
}

function rend(datas) {
  const ulRefs = document.querySelector('.film-list');
  ulRefs.innerHTML = '';
  for (const data of datas) {
    ulRefs.insertAdjacentHTML('beforeend', data);
  }
}

function fetchItem(id) {
  let a = '';
  const key = '65999cd4dc4e9b42ad69f2cfa64d7f94';
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
  )
    .then(response => response.json())
    .then(data => movie(data))
    .then(
      item => (a = item),
      //console.log(a);
      //return a;
    )
    .then(a => arrHtml.push(a));
}
