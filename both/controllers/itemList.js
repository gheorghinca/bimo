ItemsListController = AppController.extend({
  subscriptions: function() {
    return this.subscribe('items');
  },
  data: {
    itemsList : Items.find({})
  }
});
