refs = {
  linkHome: document.querySelector('.home-js'),
  linkLibrary: document.querySelector('.library-js'),
  input: document.querySelector('.search-form-input'),
  buttonWatch: document.querySelector('.button.watch'),
  buttonQueue: document.querySelector('.button.queue'),
};

refs.linkHome.addEventListener('click', headerToggler);

refs.linkLibrary.addEventListener('click', headerToggler);

function headerToggler (event) {
  event.preventDefault();
  if (event.currentTarget.classList.contains('current')) {
    return;
  } else {
    refs.linkHome.classList.toggle('current');
    refs.linkLibrary.classList.toggle('current');
    refs.input.classList.toggle('is-hidden');
    refs.buttonQueue.classList.toggle('is-hidden');
    refs.buttonWatch.classList.toggle('is-hidden');
  }
}
