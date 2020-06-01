Router.route('/tables', {
  name: 'table',
  controller: 'TableController'
});

Router.route('/tables/create', {
  name: 'table.create',
  controller: 'TableCreateController'
});

Router.route('/tables/list', {
  name: 'table.list',
  controller: 'TableListController'
});

Router.route('/tables/:_id', {
  name: 'table.view',
  controller: 'TableViewController'
});