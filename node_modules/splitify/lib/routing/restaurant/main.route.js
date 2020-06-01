Router.route('/restaurants', {
  name: 'restaurant.list',
  controller: 'RestaurantListController'
});

Router.route('/restaurants/create', {
  name: 'restaurant.create',
  controller: 'RestaurantCreateController'
});

Router.route('/restaurants/delete', {
  name: 'restaurant.delete',
  controller: 'RestaurantDeleteController'
});

Router.route('/restaurants/recent', {
  name: 'restaurant.recent',
  controller: 'RestaurantRecentController'
});

Router.route('/restaurants/:_id', {
  name: 'restaurant.view',
  controller: 'RestaurantViewController'
});