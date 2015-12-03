models = require('../models');
utils = require('../../lib/utils');

exports.index = function (req, res) {
  res.render('admin/index');
}

exports.populateSku = function (req, res) {
  utils.populate();
  res.send('Should be done');
}

exports.listSkus = function (req, res) {
  models.Sku.find(function (err, data) {
    res.render('admin/list_sku', {
      skus: data
    });
  })
}

exports.editSkuFrm = function (req, res) {
  models.Sku.findOne({
    _id: req.query.id
  }, function (err, data) {
    res.render('admin/add_sku', {
      sku: data
    });
  });
}

exports.addSkuFrm = function (req, res) {
  res.render('admin/add_sku', {
    sku: ''
  });
}

exports.addSku = function (req, res) {
  if (req.body.id) {
    var sku = models.Sku.findById(req.body.id, function (err, data) {
      if (err) console.log(err);
      utils.sanitizeAndSetData(data, req.body);
      populateArray(data, req.body);
      data.save(function (err) {
        if (err) console.log(err);
        res.redirect('/admin/listSkus');
      });
    });
  } else {
    var sku = models.Sku(req.body);
    populateArray(sku, req.body);
    sku.save(function (err, data) {
      res.redirect('/admin/listSkus');
    });
  }
}

exports.populateorder = function (req, res) {
  if (req.body.id) {
    var order = models.order()
    order.user = req.body.userId
    order.sku = req.body.sku
    order.startDate = req.body
  }
}

function populateArray(data, attrs) {
  if (data.imageUrls) data.imageUrls = attrs.imgUrlList.split(',');
  if (data.tags) data.tags = attrs.tagList.split(',');
}