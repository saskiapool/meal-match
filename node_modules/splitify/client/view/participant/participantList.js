Template.participantList.helpers({
  'users': function() {
    return Users.find().fetch();
  }
});