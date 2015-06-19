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
  title: {
    type: String,
    label: "title",
    max: 50,
  },
  partitioned: {
    type: String,
    label: "Category",
    allowedValues: ['atached', 'detached'],
    optional: true
  },
  noRooms: {
    type: Number,
    label: "No. Rooms",
    min: 0,
    optional: true
  },
  price: {
    type: Number,
    label: "Price",
    optional: true
  },
  currency: {
    type: String,
    label: "Currency",
    allowedValues: ['RON', 'EUR', 'USD'],
    optional: true
  },
  negociable: {
    type: Boolean,
    label: "Negociable",
    optional: true
  },
  constructionYear: {
    type: Number,
    label: "Construction Year",
    regEx: /^[0-9]{4}$/,
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    max: 500,
    optional: true
  },
  city: {
    type: String,
    label: "City",
    max: 50,
    optional: true
  },
  contactName: {
    type: String,
    label: "Contact Name",
    max: 500,
    optional: true
  },
  email: {
    type: String,
    label: "Email",
    regEx: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
    optional: true
  },
  phoneNo: {
    type: Number,
    label: "Phone Number",
    regEx: /^[0-9]{13}$/,
    optional: true
  }
}));
