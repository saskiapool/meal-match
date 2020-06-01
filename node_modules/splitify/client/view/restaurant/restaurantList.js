Template.restaurantList.helpers({
  restaurants: function() {
    return Restaurants.find().fetch();
  }
});

Template.restaurantList.events({
  'click .restaurant-delete-item': function(event) {
    event.preventDefault();

    Restaurants.remove(this._id);
  }
});