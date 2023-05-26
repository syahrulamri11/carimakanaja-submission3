/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.list');
  I.see('You don\'t have any favorite restaurant!', 'h2');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('You don\'t have any favorite restaurant!', 'h2');
  I.amOnPage('/');
  await I.waitForElement('.list_item_title a', 3);
  const firstRestaurant = locate('.list_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  await I.waitForElement('#favoriteButton', 5);
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  await I.waitForVisible('.list', 5);
  await I.seeElement('.list');
  const likedRestaurantTitle = await I.grabTextFrom('.list_item_title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.list');

  const firstRestaurantLiked = locate('.list_item_title a').first();
  I.click(firstRestaurantLiked);
  I.waitForElement('#favoriteButton', 5);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('#/favorite');
  I.seeElement('.list');
  I.see('You don\'t have any favorite restaurant!', 'h2');
});
