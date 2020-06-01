var fixturesData = [
  {
    title: 'Gastromania',
    description: 'Gastromania is a lorem ipsum restaurant',
    picture: '/images/food/Food (1).jpg'
  },
  {
    title: 'Pizza Hut',
    description: 'Pizza Hut is a lorem ipsum restaurant',
    picture: '/images/food/Food (2).jpg'
  },
  {
    title: 'Andys Pizza',
    description: 'Andys pizza is a lorem ipsum restaurant',
    picture: '/images/food/Food (3).jpg'
  },
  {
    title: 'La placinte',
    description: 'La placinte is a lorem ipsum restaurant',
    picture: '/images/food/Food (4).jpg'
  },
  {
    title: 'Oliva',
    description: 'Oliva is a lorem ipsum restaurant',
    picture: '/images/food/Food (5).jpg'
  },
  {
    title: 'McDonalds',
    description: 'McDonalds is a lorem ipsum restaurant',
    picture: '/images/food/Food (6).jpg'
  },
  {
    title: 'Botoias',
    description: 'Butoias is a lorem ipsum restaurant',
    picture: '/images/food/Food (7).jpg'
  },
  {
    title: 'VegaL',
    description: 'VegaL is a lorem ipsum restaurant',
    picture: '/images/food/Food (8).jpg'
  },
  {
    title: 'Eli Pili',
    description: 'Eli Pili is a lorem ipsum restaurant',
    picture: '/images/food/Food (9).jpg'
  },
  {
    title: 'Zen Sushi',
    description: 'Zen Sushi is a lorem ipsum restaurant',
    picture: '/images/food/Food (10).jpg'
  }
];

Meteor.startup(function () {
  if (Restaurants.find().count() === 0) {
    fixturesData.forEach(function(item) {
      Restaurants.insert(item);
    });
  }
});