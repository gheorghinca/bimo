Items = new Mongo.Collection('items');

// Cars.attachSchema(new SimpleSchema({
//   title: {
//     type: String,
//     label: "Title",
//     max: 100
//   },
//   category: {
//     type: String,
//     label: "Category",
//     allowedValues: ['Flat', 'House', 'Land']
//   },
//   categoryDetails: {
//     type: [FlatSchema],
//     minCount: 1
//   }
// }));


Items.attachSchema(new SimpleSchema({
  partitioned: {
    type: String,
    label: "Category",
    allowedValues: ['atached', 'detached']
  },
  noRooms: {
    type: Number,
    label: "No. Rooms",
    min: 0
  },
  price: {
    type: Number,
    label: "Price"
  },
  currency: {
    type: String,
    label: "Currency",
    allowedValues: ['RON', 'EUR', 'USD']
  },
  negociable: {
    type: Boolean,
    label: "Negociable",
    optional: true
  },
  constructionYear: {
    type: Number,
    label: "Construction Year",
    regEx: /^[0-9]{4}$/
  },
  description: {
    type: String,
    label: "Description",
    max: 500
  },
  city: {
    type: String,
    label: "City",
    max: 50
  },
  contactName: {
    type: String,
    label: "Contact Name",
    max: 500
  },
  email: {
    type: String,
    label: "Email",
    regEx: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
  },
  phoneNo: {
    type: Number,
    label: "Phone Number",
    regEx: /^[0-9]{13}$/
  },
  phoneNo1: {
    type: Number,
    label: "Phone Number1",
    regEx: /^[0-9]{13}$/
  }
}));
