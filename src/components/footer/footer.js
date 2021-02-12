refs = {
  students: document.querySelector('.footer-description__link'),
  main: document.querySelector('.main-cont'),
};
console.log(refs.main);

refs.students.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  const markup = `<div class='modal'>
    <ul class='modalWindow-list'>
        <li class='modalWindow-item'><span>Максим Казачук </span>Team lead <img src='' alt='Team lead picture'/></li>
        <li class='modalWindow-item'><span>Павел Сакун </span>Scrum Master <img src='' alt='Scrum Master picture'/></li>
        <li class='modalWindow-item'><span>Дмитрий Оргиш </span>Teammate <img src='' alt='Teammate picture'/></li>
        <li class='modalWindow-item'><span>Дмитрий Баженов </span>Teammate <img src='' alt='Teammate picture'/></li>
        <li class='modalWindow-item'><span>Максим Туганов </span>Teammate <img src='' alt='Teammate picture'/></li>
        <li class='modalWindow-item'><span>Евгений Серебрянников </span>Teammate <img src='' alt='Teammate picture'/></li>
        <li class='modalWindow-item'><span>Владимир Челидзе </span>Teammate <img src='' alt='Teammate picture'/></li>
        <li class='modalWindow-item'><span>Станислав Карасик </span>Teammate <img src='' alt='Teammate picture'/></li>
    </ul>
    </div>`;
  refs.main.insertAdjacentHTML('beforeend', markup);
}
