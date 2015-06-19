// Router.route('/', {
//   name: 'home'
// });
//
// Router.route('/dashboard', {
//   name: 'dashboard'
// });

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

Router.route('/addItem', {
  name: 'addItem',
  controller: 'ItemsController',
  action: 'create',
  where: 'client'
});

Router.route('/', {
  name: 'itemList',
  controller: 'ItemsListController',
  where: 'client'
});
