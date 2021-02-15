import poky from '../../images/poky.jpg';

const students = document.querySelector('.footer-description__link');
const main = document.querySelector('.main-cont');
const body = document.querySelector('body');

students.addEventListener('click', openModal);

const createDevelopers = () => {
  const markup = `<div class='overlay'>
    <div class='modal'>
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
        </div>
    </div>`;
  main.insertAdjacentHTML('beforeend', markup);
};

function openModal(event) {
  event.preventDefault();
  createDevelopers();

  const modalWindowRef = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  overlay.style.display = 'block';
  body.style.overflow = 'hidden';

  modalWindowRef.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON') {
      overlay.remove();
      body.style.overflow = 'unset';
    }
  });

  body.addEventListener('keydown', escHandler);

  function escHandler(event) {
    if (event.code === 'Escape') {
      overlay.remove();
      body.style.overflow = 'unset';
      body.removeEventListener('keydown', escHandler);
    }
  }
}

// function closeModal(event) {

// }
