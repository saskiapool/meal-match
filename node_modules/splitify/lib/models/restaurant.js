Restaurants = new Meteor.Collection('restaurants');

RestaurantsService = {
  list: function() {
    return Restaurants.find({}, {sort: {title: 1}});
  },
}
