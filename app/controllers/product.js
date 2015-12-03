exports.details = function(req, res) {
  console.log("Id == "+req.params.skuId);
  models.Sku.findOne({_id: req.params.skuId}, function(err, data){
    res.render('product/details', {sku: data, user: req.user});
  })
}