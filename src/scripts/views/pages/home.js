/* eslint-disable linebreak-style */
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Beranda = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1>Explore Restaurant</h1>
                <div class="list" id="tes""></div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurants();
    const container = document.querySelector('.list');
    restaurants.forEach((restaurant) => {
      container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Beranda;
