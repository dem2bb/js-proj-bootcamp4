refs = {
  linkHome: document.querySelector('.home-js'),
  linkLibrary: document.querySelector('.library-js'),
  inputForm: document.querySelector('.search-form'),
  buttonWatch: document.querySelector('.button.watch'),
  buttonQueue: document.querySelector('.button.queue'),
  headerBcg: document.querySelector('.page-header'),
};

refs.linkHome.addEventListener('click', headerToggler);

refs.linkLibrary.addEventListener('click', headerToggler);

function headerToggler(event) {
  event.preventDefault();
  if (event.currentTarget.classList.contains('current')) {
    return;
  }
  refs.linkHome.classList.toggle('current');
  refs.linkLibrary.classList.toggle('current');
  refs.inputForm.classList.toggle('is-hidden');
  refs.buttonQueue.classList.toggle('is-hidden');
  refs.buttonWatch.classList.toggle('is-hidden');
  refs.headerBcg.classList.toggle('lib-bcg');
}
