Router.route('/bills', {
  name: 'bill.list',
  controller: 'BillListController'
});

Router.route('/bills/:_id', {
  name: 'bill.view',
  controller: 'BillViewController'
});