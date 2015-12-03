exports.add = function (req, res) {
  console.log("Request body == "+JSON.stringify(req.body));

  var order = models.Order(req.body);
  order.save(function (err, data) {
    console.log("Goes through = " + data);
    res.send({
      success: true
    });
    res.end();
  }, function (err, data) {
    console.log("In error = " + err);
  })
};

exports.get = function (req, res) {
  console.log("Finding cart by user id = " + req.user._id);
  models.order.find({
    user: req.user._id
  }, function (err, data) {
    res.render('order/details', {
      Order: data,
      user: req.user
    });
  })
};