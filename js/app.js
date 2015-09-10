//Define an angular module for our app
var sampleApp  = angular.module('sampleApp', ['ngRoute', 'ngAnimate']);


//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html'
      //   controller: 'aboutController'
    }).
      when('/work', {
        templateUrl: 'partials/work.html'
      //   controller: 'workController'
     });
}]);


// CONTROLLERS ============================================
// home page controller
// sampleApp.controller('aboutController', function($scope) {
//     $scope.pageClass = 'page-about';
// });
//
// // about page controller
// sampleApp.controller('workController', function($scope) {
//     $scope.pageClass = 'page-work';
// });
