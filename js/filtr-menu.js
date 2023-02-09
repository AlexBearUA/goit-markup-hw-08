const filtrButtonsContainer = document.querySelector('ul.projects-filtr');

const filtrAllCards = [...document.querySelectorAll('ul.our-projects li')];

console.log(filtrAllCards);
console.log(typeof filtrAllCards);

filtrButtonsContainer.addEventListener('click', filtrBtnClickHandler);

function filtrBtnClickHandler(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.projects-filtr__button--active');

  currentActiveBtn.classList.remove('projects-filtr__button--active');

  const nextActiveBtn = evt.target;

  nextActiveBtn.classList.add('projects-filtr__button--active');

  cleanCardsFilter();

  filtredCards();

  function cleanCardsFilter() {
    filtrAllCards.reduce((previousValue, element, index, array) => {
      return element.classList.remove('visually-hidden');
    });
  }

  function filtredCards() {
    filtrAllCards.reduce((previousValue, element, index, array) => {
      if (element.dataset.value === nextActiveBtn.dataset.value) {
        return element;
      }

      return element.classList.add('visually-hidden');
    });
    console.log(nextActiveBtn.dataset.value);
  }
}
