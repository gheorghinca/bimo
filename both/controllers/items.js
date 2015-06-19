ItemsController = AppController.extend({
  subscriptions: function() {
    return this.subscribe('items');
  },
  data: {
    items : Items.find({})
  },
  create: function() {
    this.render('addItem', {});
  }
});
