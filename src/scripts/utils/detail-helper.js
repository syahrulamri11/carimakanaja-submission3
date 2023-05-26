/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import {
  createDrinkItemTemplate,
  createFoodItemTemplate,
  createCustomerReviewTemplate,
} from '../views/templates/template-creator';

const DetailHelper = {
  eachFoodsMenu({ foods }) {
    let foodsString = '';
    foods.forEach((food) => {
      foodsString += createFoodItemTemplate(food);
    });
    return foodsString;
  },

  eachDrinksMenu({ drinks }) {
    let drinksString = '';
    drinks.forEach((drink) => {
      drinksString += createDrinkItemTemplate(drink);
    });
    return drinksString;
  },
  eachCustomersReview({ customerReviews }) {
    let customerReviewsString = '';
    customerReviews.forEach((customerReview) => {
      customerReviewsString += createCustomerReviewTemplate(customerReview);
    });

    return customerReviewsString;
  },
};

export default DetailHelper;
