uberWearModule.controller('CartCtrl', function ($timeout, $scope, Cart, Order) {
  Cart.get({}, function(d){
    $scope.items = d;
    $timeout(function () {
      $(".from-datepicker").datepicker({
        onClose: function (selDate) {
          $(this).parent().parent().find(".to-datepicker").datepicker("option", "minDate", selDate);
        }
      });
      $(".to-datepicker").datepicker();
    }, 100);
  });


  $scope.delete = function(){
    var idx = this.$index;
    Cart.delete({skuId: this.item.sku._id}, function(){
      $scope.items.cart.splice(idx, 1);
      Cart.get({}, function(d){
        $scope.pg.cart = d;
      });
    })
  }

  $scope.confirmOrder = function(){
    Order.add({}, {
      user: $scope.user_id,
      totalAmount: 45,
      advanceAmount: 55,
      lineItems: $scope.items.cart
    }, function (d) {
      console.log("added into order");
      window.location.href = "/cart/thanks"
    }, function (e) {
      console.log("error in insert");
    });
  }
});