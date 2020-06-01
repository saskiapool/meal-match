Meteor.startup(function() {
  Restaurants.allow({
    insert: function(userId, restaurant) {
      return true;
    },
    update: function(userId, restaurant) {
      return true;
    },
    remove: function(userId, restaurant) {
      return true;
    }
  });
});