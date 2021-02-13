import poky from '../../images/poky.jpg';

const students = document.querySelector('.footer-description__link');
const main = document.querySelector('.main-cont');

students.addEventListener('click', openModal);

const img = '../../images/poky.jpg';

function openModal(event) {
  event.preventDefault();
  const markup = `<div class='modal'>
  <h2 class='our-team__name'>Development team</h2>
      <ul class='modalWindow-list'>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Team lead picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Maxim Kazachuk </h3><span class='our-team__position'>Team lead</span></li>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Scrum Master picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Pavlo Sakun </h3><span class='our-team__position'>Scrum Master</span></li>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Teammate picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Dmitry Orgish </h3><span class='our-team__position'>Teammate</span></li>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Teammate picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Dmitriy Grinchenko </h3><span class='our-team__position'>Teammate</span></li>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Teammate picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Maksym Tuhanov </h3><span class='our-team__position'>Teammate</span></li>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Teammate picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Evgeniy Serebrennikov </h3><span class='our-team__position'>Teammate</span></li>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Teammate picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Vova Chelidze </h3><span class='our-team__position'>Teammate</span></li>
          <li class='modalWindow-item'>
          <img 
          src=${poky} 
          alt="Teammate picture"
          class="our-team__picture"
          width="150"
          height="150"
          /><h3 class='teammates-name'>Stanislav Karasyk </h3><span class='our-team__position'>Teammate</span></li>
      </ul>
      <button class='button-footer button is-active'>Close</button>
      </div>`;
  main.insertAdjacentHTML('beforeend', markup);

  const closeBtnRef = document.querySelector('.modal > button');
  const modalWindowRef = document.querySelector('.modal');

  modalWindowRef.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON') {
      modalWindowRef.remove();
    }
  });
}
