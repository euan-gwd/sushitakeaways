angular.module('SushiApp.controllers', [])

.controller('ListController', ['$scope','$http', '$state', function($scope, $http, $state) {
 
  $http.get('js/data/asushi.json').success(function(sushiData) {
    $scope.sushiItems =  sushiData;
  });

  $http.get('js/data/cali.json').success(function(caliData) {
    $scope.caliItems =  caliData;
  });

  $http.get('js/data/fashion.json').success(function(fashionData) {
    $scope.fashionItems =  fashionData;
  });

  $http.get('js/data/maki.json').success(function(makiData) {
    $scope.makiItems =  makiData;
  });

$http.get('js/data/nigiri.json').success(function(nigiriData) {
    $scope.nigiriItems =  nigiriData;
  });

$http.get('js/data/rnb.json').success(function(rnbData) {
    $scope.rnbItems =  rnbData;
  });

  $http.get('js/data/platters.json').success(function(platterData) {
    $scope.platterItems =  platterData;
  });

  $scope.updateCart = function() {
    var a =[];
    for (var h = 0; h < $scope.sushiItems.length; h++) {
      var sitem = $scope.sushiItems[h];
      if ( sitem.Checked) {
        a.push(sitem);
      }
    }

    var b = [];
    for (var i = 0; i < $scope.caliItems.length; i++) {
      var itemp = $scope.caliItems[i];
      if ( itemp.Checked) {
        b.push(itemp);
      }
    }

    var c = [];
    for (var j = 0; j < $scope.fashionItems.length; j++) {
      var fitem = $scope.fashionItems[j];
      if ( fitem.Checked) {
        c.push(fitem);
      }
    }
    var d = [];
    for (var k = 0; k < $scope.makiItems.length; k++) {
      var mitem = $scope.makiItems[k];
      if ( mitem.Checked) {
        d.push(mitem);
      }
    }
    var e = [];
    for (var l = 0; l < $scope.nigiriItems.length; l++) {
      var nitem = $scope.nigiriItems[l];
      if ( nitem.Checked) {
        e.push(nitem);
      }
    }
    var f = [];
    for (var m = 0; m < $scope.rnbItems.length; m++) {
      var ritem = $scope.rnbItems[m];
      if ( ritem.Checked) {
        f.push(ritem);
      }
    }
    var g = [];
    for (var n = 0; n < $scope.platterItems.length; n++) {
      var pitem = $scope.platterItems[n];
      if ( pitem.Checked) {
        g.push(pitem);
      }
    }
    

    var z = a.concat(b).concat(c).concat(d).concat(e).concat(f).concat(g);
    window.sessionStorage.z = angular.toJson(z);
    $state.go('app.cart');
  };
}])

.controller('CartController',['$scope', '$state', function($scope, $state) {
  var cartItems = angular.fromJson(window.sessionStorage.z || '[]');

  $scope.selectedItems = cartItems;
  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.selectedItems.length; i++){
        var selectedItem = $scope.selectedItems[i];
        total += (selectedItem.price * selectedItem.quantity);
    }
    return total;
  };
}])

.controller('KitchenController', function() {
  
})

.controller('DessertController', function() {
  
});