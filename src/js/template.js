import menuArr from '../menu.json'
import refs from './refs.js'

let markup = menuArr.map(item => {
    return `<li class="menu__item">
    <article class="card">
      <img
        src=${item.image}
        alt=${item.name}
        class="card__image"
      />
      <div class="card__content">
        <h2 class="card__name">${item.name}</h2>
        <p class="card__price">
          <i class="material-icons"> monetization_on </i>
          ${item.price} кредитов
        </p>  
        <p class="card__descr">${item.description}</p>  
        <ul class="tag-list">
        </ul>
      </div>  
      <button class="card__button button">
        <i class="material-icons button__icon"> shopping_cart </i>
        В корзину
      </button>
    </article>
  </li>`
}).join('');

refs.menu.innerHTML = markup;

let ingredientsRef = document.querySelectorAll('.tag-list')
ingredientsRef.forEach((item, idx) => {
    item.innerHTML = menuArr[idx].ingredients.map(ingredient => {
        return `<li class="tag-list__item">${ingredient}</li>`
    }).join('')
})