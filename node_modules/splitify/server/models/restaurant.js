Meteor.publish('restaurants', function() {
  return Restaurants.find();

  // Only publish restaurants that are public or belong to the current user
  /*return Restaurants.find({
    $or: [
      {
        private: {
          $ne: true,
        },
      },
      {
        owner: this.userId,
      },
    ],
  });*/
});