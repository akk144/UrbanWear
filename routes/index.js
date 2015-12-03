var express = require('express');
var router = express.Router();
var passport = require('passport');
var security = require('../app/middleware');
var models = require('../app/models');

var userController = require('../app/controllers/user')
var productController = require('../app/controllers/product')
var cartController = require('../app/controllers/cart')
var orderController = require('../app/controllers/order')

router.get('/', function(req, res, next) {
  models.Sku.find(function(err, skus){
    res.render('index', { title: 'UberWear', user : req.user, skus: skus  });
  })
    .sort({createdAt: -1})
    .limit(4);
});


router.get('/browse/:tag', function(req, res, next) {
  var params = {};

  if (req.params.tag){
    params = {tags: req.params.tag};
  }
  models.Sku.find(params, function(err, skus){
    console.log(skus);
    res.render('grid', { title: 'UberWear', user : req.user, skus: skus, tag: req.params.tag  });
  }).limit(4);
});

router.get('/login', userController.login);

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/signup', function(req, res) {
	res.render('signup', { message: req.flash('signupMessage') });
});

router.get('/wear/:skuId', productController.details);

router.post('/cart', cartController.add);
router.get('/cart', cartController.show);
router.get('/cart/data', cartController.get);
router.get('/cart/thanks', cartController.thanks);
router.delete('/cart', cartController.delete);

router.post('/order', orderController.add);

router.get('/logout', userController.logout);
router.get('/profile', security.isAuthenticated, userController.profile);

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

module.exports = router;
