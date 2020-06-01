Router.route('/signin', {
  name: 'sign.in',
  controller: 'AuthSignInController'
});

Router.route('/signup', {
  name: 'sign.up',
  controller: 'AuthSignUpController'
});

Router.route('/terms', {
  name: 'terms',
  controller: 'AuthTermsController'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'AuthProfileController'
});

Router.route('/profile/:username', {
  name: 'profile.view',
  controller: 'AuthProfileViewController'
});