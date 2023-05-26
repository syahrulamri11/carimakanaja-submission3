/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h1>Favorite Restaurant</h1>
        <div class="list" id="tes"></div>
    </div>
    </section>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantFavoriteElement = document.querySelector('.list');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantFavoriteElement.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      this._renderError();
    }
  },

  _renderError() {
    const mainContent = document.querySelector('#content');
    const errorMessage = document.createElement('h2');
    errorMessage.innerText = 'You don\'t have any favorite restaurant!';
    mainContent.append(errorMessage);
  },
};

export default Favorite;
