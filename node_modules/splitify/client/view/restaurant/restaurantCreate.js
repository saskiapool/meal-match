Template.restaurantCreate.events({
  'submit form': function(event) {
    event.preventDefault();
    var item = {
      title: event.target.title.value,
      description: event.target.title.description
    };

    Restaurants.insert(item);

    Router.go('restaurant.list');
  }
});