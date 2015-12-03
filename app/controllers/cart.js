exports.add = function (req, res) {
  var cart = models.Cart(req.body);
  cart.save(function (err, data) {
    console.log("Goes through = " + data);
    res.send({
      success: true
    });
    res.end();
  }, function (err, data) {
    console.log("In error = " + err);
  })
};

exports.delete = function (req, res) {
  models.Cart.find({sku: req.query.skuId, user: req.user._id}).remove()
    .exec(function (err, data) {
      console.log("Goes through = " + data);
      res.send({
        success: true
      });
      res.end();
    }, function (err, data) {
      console.log("In error = " + err);
    });
};

exports.show = function (req, res) {
  res.render('cart/details', {user: req.user});
};

exports.thanks = function (req, res) {
  res.render('cart/thanks');
};


exports.get = function (req, res) {
  console.log("Finding cart by user id = " + req.user._id);
  models.Cart.find({
    user: req.user._id
  }, function (err, data) {
    res.send({
      cart: data,
      user: req.user
    });
    res.end();
  })
    .populate('sku')
    .populate('user')
};

exports.getXhr = function (req, res) {
  console.log("Finding cart by user id = " + req.user._id);
  models.Cart.find({
    user: req.user._id
  }, function (err, data) {
    res.json( {
      cart: data,
      user: req.user
    });
  })
    .populate('sku')
    .populate('user')
};