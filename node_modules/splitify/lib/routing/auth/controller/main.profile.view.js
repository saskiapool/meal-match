AuthProfileViewController = ApplicationController.extend({
  template: 'profileView',
  yieldRegions: {},
  subscriptions: function() {
    //this.subscribe('users');

    // add the subscription to the waitlist
    //this.subscribe('users', this.params.username).wait();
  },
  data: function() {
    //return Users.findOne({username: this.params.username});
  }
});