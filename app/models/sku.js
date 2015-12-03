var mongoose = require('mongoose');
var skuSchema = mongoose.Schema({
  name : { type: String, required: false, trim: true }
  , dressBy : { type: String, required: false, trim: true }
  , detail : { type: String, required: false, trim: true }
  , stylistNote : { type: String, required: false, trim: true }
  , sizeAndFitNote : { type: String, required: false, trim: true }
  , imageUrls : [{ type: String, required: false, trim: true }]
  , rental: {type: Number, required: true}
  , mrp: {type: Number, required: true}
  , tags : [{type: String, trim: true, lowercase: true}]
  , createdAt : { type: Date, default: Date.now  }
  , updatedAt : { type: Date, default: Date.now  }
});

module.exports = mongoose.model('Sku', skuSchema);