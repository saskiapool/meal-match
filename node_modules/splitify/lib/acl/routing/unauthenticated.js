/**
 * Unauthenticated hook
 * @returns {*}
 */
Iron.Router.hooks.unauthenticated = function() {
  var routeName = Router.current().route.getName();
  var user = Meteor.user();
  if (!user && routeName !== 'sign.in') {
    return Router.go('sign.in');
  } else {
    return this.next();
  }
};

Router.onBeforeAction('unauthenticated', {
  where: 'server',
  except: ['sign.in', 'sign.up', 'terms']
});

console.log('Here be monsters');