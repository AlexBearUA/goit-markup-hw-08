const filtrButtonsContainer = document.querySelector('ul.projects-filtr');

const filtrAllCards = [...document.querySelectorAll('ul.our-projects li')];

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

  function filtredCards() {
    filtrAllCards.reduce((previousValue, element) => {
      if (nextActiveBtn.dataset.value === element.dataset.value) {
        return element;
      } else if (nextActiveBtn.dataset.value === 'all') {
        return cleanCardsFilter();
      }
      return element.classList.add('visually-hidden');
    }, 0);
  }

  function cleanCardsFilter() {
    filtrAllCards.reduce((previousValue, element) => {
      return element.classList.remove('visually-hidden');
    }, 0);
  }
}
