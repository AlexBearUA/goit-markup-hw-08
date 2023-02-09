const filtrButtonsContainer = document.querySelector('ul.projects-filtr');
const filtrAllCards = [...document.querySelectorAll('ul.our-projects li')];
filtrButtonsContainer.addEventListener('click', filtrBtnClickHandler);

function filtrBtnClickHandler(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const previousActiveBtn = document.querySelector('.projects-filtr__button--active');
  previousActiveBtn.classList.remove('projects-filtr__button--active');
  const currentActiveBtn = evt.target;

  currentActiveBtn.classList.add('projects-filtr__button--active');

  cleanCardsFilter();
  filtredCards();

  function filtredCards() {
    if (currentActiveBtn.dataset.value === 'all') {
      return cleanCardsFilter();
    }
    filtrAllCards.reduce((previousValue, element) => {
      if (currentActiveBtn.dataset.value === element.dataset.value) {
        return element;
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
