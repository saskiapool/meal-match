Template.signUp.events({
  'submit form#sign-up-form': function(event) {
    event.preventDefault();

    //@todo: Validate signup form
    var item = {
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
      profile: {}
    };

    Accounts.createUser(item, function(error) {
      if (error) {
        //@todo: toast the error
        console.log(error);
      }

      Router.go('profile');
    });
  }
});