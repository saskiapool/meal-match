ApplicationController = RouteController.extend({
  layoutTemplate: 'default',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'splash',
  waitOn: function() {
    //@todo: set collections to wait for on app loading
    return [
      //Meteor.subscribe('restaurants')
    ];
  },
  onBeforeAction: function() {
    return this.next();
  },
  onAfterAction: function() {
    if (Meteor.isClient) {
      //@todo: set dynamic meta information
      SEO.set({
        title: 'Splitify::Restaurant bill split like a boss',
        meta: {
          'description': 'Split your restaurant bill with a easy to use application'
        }
      });
    }
  }
});