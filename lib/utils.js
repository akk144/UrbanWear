var mockData = require('./mock_data');
var models = require('../app/models');

exports.validEmail = function (email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

exports.populate = function(next) {
  // Iterate over mockData and populate SKU
  for (var i = mockData.dat.length - 1; i >= 0; i--) {
    console.log(mockData.dat[i]);
    var newSku = new models.Sku(mockData.dat[i]);
    newSku.save();
  };
}

exports.validPassword = function (password) {
  return password.length > 5;
}

exports.sanitizeAndSetData = function (usrDoc, updatedAttr) {
  for (var property in usrDoc) {
    if (updatedAttr.hasOwnProperty(property)) {
      usrDoc[property] = updatedAttr[property]
    }
  }
  if (updatedAttr.activityCheck) {
    usrDoc.activityCheckTime = new Date();
  }
}