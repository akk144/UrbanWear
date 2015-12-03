uberWearModule.controller('ProductCtrl', function($timeout, $scope, Cart){
  $scope.addToCart = function(){
    Cart.add({}, {user: $scope.user_id, sku: $scope.sku_id, quantity: 1, price: $scope.price}, function(d){
      console.log("added into cart");
      Cart.get({}, function(d){
        $scope.pg.cart = d;
      });
    }, function(e){
      console.log("error in insert");
    })
  }
});