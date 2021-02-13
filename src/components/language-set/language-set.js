const refLanguageSet = document.querySelector('.theme-switch__toggle');
const refEnglish = document.querySelectorAll('.english');
const refRussian = document.querySelectorAll('.russian');

// const Languge = {
//   ENG: 'english',
//   RUS: 'russian',
// };

// const getLanguage = () => {
//   const savedLanguage = localStorage.getItem('languge');
//   savedLanguage === Languge.RUS ? (refLanguageSet.checked = true) : '';
//   if (savedLanguage === Languge.RUS) {
//     refEnglish.forEach(e => {
//       e.setAttribute('hidden', true);
//     });
//   }
// };

// const changeLanguge = () => {
//   localStorage.setItem('languge', languageReplace());
//   refBody.className = languageReplace();
// };
// const languageReplace = () =>
//   refBody.className === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

// getLanguage();
// refLanguageSet.addEventListener('click', changeLanguge);

// // refEnglish.forEach(e => {
// //   console.dir(e);
// //   console.log(e.hasAttribute('hidden'));
// // });
// // refRussian.some(e => {
// //   console.dir(e);
// //   console.log(e.hasAttribute('hidden'));
// // });
