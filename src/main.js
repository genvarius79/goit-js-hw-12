import { getImages } from './js/pixabay-api';
import { countPages } from './js/pixabay-api';
import { resetCountPages } from './js/pixabay-api';
const fetchUsersBtn = document.querySelector('button[data-start]');
const input = document.querySelector('#data-search');
const btnLoadMore = document.querySelector('button[data-loadmore]');
let globalNameImage;
fetchUsersBtn.addEventListener('click', () => {
  const nameImage = input.value.trim();
  resetCountPages();
  if (nameImage !== '') {
    getImages(nameImage.trim());
    globalNameImage = nameImage;
  }
});

btnLoadMore.addEventListener('click', () => {
  countPages();
  getImages(globalNameImage);
});
