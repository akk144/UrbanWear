uberWearModule.controller('NavCtrl', function ($scope, Cart, Order) {
  Cart.get({}, function(d){
    $scope.pg.cart = d;
  });
});