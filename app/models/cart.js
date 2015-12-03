var mongoose = require('mongoose');
var cartSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  , sku: {type: mongoose.Schema.Types.ObjectId, ref: 'Sku', required: true}
  , quantity : { type: Number, required: true }
  , price : { type: Number, required: true }
});

module.exports = mongoose.model('Cart', cartSchema);