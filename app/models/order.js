var mongoose = require('mongoose');
var orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  advanceAmount: {
    type: Number,
    required: true
  },
  lineItems:[{sku: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sku',
      required: true
    },
    fromDate: {
      type: Date,
      required: true
    },
    toDate: {
      type: Date,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }]
});

module.exports = mongoose.model('Order', orderSchema);