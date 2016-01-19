var app = angular.module('SushiApp', ['ionic','SushiApp.controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("app", {
          url: "/app",
          abstract: true,
          templateUrl: "templates/menu.html"
        })

  .state("app.list", {
          url: "/list",
          views: {
            "menuContent": {
             templateUrl: "templates/list.html",
             controller: "ListController"
             }
          }   
      })  

  .state("app.cart", {
        url: "/cart",
        views: {
          "menuContent": {
           templateUrl: "templates/cart.html",
           controller: "CartController"
           }
        }   
    })

  .state("app.kitchen", {
        url: "/kitchen",
        views: {
          "menuContent": {
           templateUrl: "templates/kitchen.html",
           controller: "KitchenController"
           }
        }   
    })

  .state("app.dnd", {
        url: "/dnd",
        views: {
          "menuContent": {
           templateUrl: "templates/dnd.html",
           controller: "DessertController"
           }
        }   
    })

  .state("app.contact", {
        url: "/contact",
        views: {
          "menuContent": {
           templateUrl: "templates/contact.html"
           }
        }   
    });
     
  $urlRouterProvider.otherwise('/app/list');     
});