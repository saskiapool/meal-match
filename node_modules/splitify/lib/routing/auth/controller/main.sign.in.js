AuthSignInController = ApplicationController.extend({
  template: 'signIn',
  layoutTemplate: 'empty',
  yieldRegions: {},
  subscriptions: function() {},
  data: function() {},
  onBeforeAction: function() {
    var user = Meteor.user();

    if (user) {
      return Router.go('profile');
    } else {
      return this.next();
    }
  }
});