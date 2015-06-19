Template.items.rendered = function() {

pages = new Meteor.Pagination("items", {
  perPage: 20,
  sort: {
    title: 1
  },
  availableSettings: {
    perPage: true,
    sort: true
  }
});
};
