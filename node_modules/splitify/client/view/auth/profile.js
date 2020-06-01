Template.profile.helpers({
  profile: function() {
    return Meteor.user();
  }
});

Template.profile.events({
  'click #profile-sign-out-btn': function() {
    Meteor.logout(function(error) {
      //@todo: toast the error
      if (error) {
        console.log(error);
      }

      Router.go('home');
    });
  }
});