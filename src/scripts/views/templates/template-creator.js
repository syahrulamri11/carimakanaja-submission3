/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import API_ENDPOINT from '../../globals/api-endpoint';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantItemTemplate = (restaurant) => `
<div class="list_item">
<img class="list_item_thumb lazyload" data-src="${API_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}" crossorigin="anonymous" alt="alternatif gambar">
    <div class="city">${restaurant.city}</div>
        <div class="lists_item_content">
            <p class="list_item_rating">
            <a href="#/detail/${restaurant.id}" class="list_item_rating_value">Rating : <span class="rating-value">${restaurant.rating}</span></a>
            </p>
            <h1 class="list_item_title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
        <div class="list_item_desc">${restaurant.description}</div>
    </div>
</div>
    
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant_detail_header">
      <img class="restaurant-detail_header_poster lazyload" alt="${restaurant.name}" src="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}">
      <div class="restaurant-detail_header_rating">
    <div class="restaurant-detail_header_rating_item">
      <span class="restaurant-detail_header_rating_label">Address:</span>
      <span class="restaurant-detail_header_rating_value">${restaurant.address}, ${restaurant.city}</span>
    </div>
    <div class="restaurant-detail_header_rating_item">
      <span class="restaurant-detail_header_rating_label">Rating:</span>
      <span class="restaurant-detail_header_rating_value">${restaurant.rating}</span>
  </div>
</div>

    </div>
    <div class="restaurant-detail_content">
      <h2 class="restaurant-detail_content_title">${restaurant.name}</h2>
      <p class="restaurant-detail_content_description">${restaurant.description}</p>
      <h3>Menu Makanan</h3>
      <ul class="foods">
      ${DetailHelper.eachFoodsMenu(restaurant.menus)}
      </ul>
      <h3>Menu Minuman</h3>
      <ul class="drinks">
      ${DetailHelper.eachDrinksMenu(restaurant.menus)}
      </ul>
      <div class="restaurant-detail_content_review">
        <h3>Customer Reviews</h3>
        <div id="customerReviews">
        ${DetailHelper.eachCustomersReview(restaurant)}
        </div>
      </div>
  </div>
`;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="Add this restaurant to favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedRestaurantButtonTemplate = () => `
  <button aria-label="Remove this restaurant from favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createCustomerReviewTemplate = (customerReview) => `
  <div class="customer-review" tabindex="0" aria-label="${customerReview.name} memberikan review pada ${customerReview.date}. Dan pesan reviewnya adalah ${customerReview.review}.">
    <h4 class="customer-review__name">${customerReview.name}</h4>
    <p class="customer-review__date">${customerReview.date}</p>
    <p class="customer-review__text">${customerReview.review}</p>
  </div>
`;

const createDrinkItemTemplate = (drink) => `
  <li class="drink-item" aria-label="${drink.name}">
    ${drink.name}
  </li>
`;

const createFoodItemTemplate = (food) => `
  <li class="food-item" aria-label="${food.name}">
    ${food.name}
  </li>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createFavoritedRestaurantButtonTemplate,
  createCustomerReviewTemplate,
  createDrinkItemTemplate,
  createFoodItemTemplate,
};
