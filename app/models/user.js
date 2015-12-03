/**
// Sample template
var mongoose = require('mongoose');
var skuSchema = mongoose.Schema({

});

module.exports = mongoose.model('Sku', skuSchema);

*/

// app/models/user.js
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var userSchema = mongoose.Schema({

    local            : {
        email        : {
          type : String,
          unique : true,
          lowercase: true,
          required : true
        },
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        raw          : String
    },
    twitter          : {
        id           : String,
        oauth_token  : String,
        oauth_token_secret : String,
        displayName  : String,
        username     : String,
        raw          : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        raw          : String
    },
    bio : { type: String, required: false, trim: true },
    firstName : { type: String, required: false, trim: true }
    , lastName : { type: String, required: false, trim: true }
    , profileImageUrl : String
    , role: {type: String, enum: ['user', 'admin'], default : 'user'}
    , tmpPassword : String
    , created_at : { type: Date, default: Date.now  }
    , updated_at : { type: Date, default: Date.now  }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    if(!this.local.password){return false;}
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.methods.toJSON = function() {
  var obj = this.toObject();
  obj.id = this._id;
  if(obj.local){delete obj.local.password;}
  delete obj.__v;
  return obj;
}

module.exports = mongoose.model('User', userSchema);