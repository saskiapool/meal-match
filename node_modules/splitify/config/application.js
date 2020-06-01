Meteor.startup(function() {
  if (Meteor.isClient) {
    return SEO.config({
      title: 'Splitify::Restaurant bill split like a boss',
      meta: {
        'description': 'Split your restaurant bill with a easy to use application'
      }
    });
  }
});