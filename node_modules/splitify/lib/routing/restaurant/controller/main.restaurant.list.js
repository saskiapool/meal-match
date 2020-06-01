RestaurantListController = ApplicationController.extend({
  template: 'restaurantList',
  //yieldRegions: {},
  subscriptions: function() {
    this.subscribe('restaurants');
  },
  waitOn: function() {
    return Meteor.subscribe('restaurants');
  },
  data: function() {}
});