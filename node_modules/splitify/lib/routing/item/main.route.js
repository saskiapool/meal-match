Router.route('/items', {
  name: 'item.list',
  controller: 'ItemListController'
});

Router.route('/items/create', {
  name: 'item.create',
  controller: 'ItemCreateController'
});

Router.route('/items/recent', {
  name: 'item.recent',
  controller: 'ItemRecentController'
});

Router.route('/items/share/:_id', {
  name: 'item.share',
  controller: 'ItemShareController'
});

Router.route('/items/view/:_id', {
  name: 'item.view',
  controller: 'ItemViewController'
});