Template.signIn.helpers({});

Template.signIn.events({
  'submit form#sign-in-form': function(event) {
    event.preventDefault();

    var id = event.target.id.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(id, password, function(err) {
      if (err) {
        Materialize.toast(err.reason, 4000);
      }

      return Router.go('profile');
    });
  }
});