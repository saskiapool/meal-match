Router.route('/participants', {
  name: 'participant.list',
  controller: 'ParticipantListController'
});

Router.route('/participants/:_id', {
  name: 'participant.view',
  controller: 'ParticipantViewController'
});