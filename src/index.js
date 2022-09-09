import './js/hello';
import './style.scss'

const image = require('./asset/icon/logo.svg');

const imagePromo = document.querySelector('.promo__image');
imagePromo.addEventListener('click', () => {
document.body.innerHTML = `<img src="${image}" alt="test">`
})