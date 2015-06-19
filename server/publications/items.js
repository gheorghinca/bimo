Meteor.publish("items", function () {
  return Items.find();
});


// Meteor.publishComposite("cars", function() {
//   return {
//     find: function() {
//       return Cars.find({});
//     }
//   }
// });
