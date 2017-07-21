var app = angular.module('madlibModule' );

app.config(function($routeProvider) {

  $routeProvider
    .when('/input', {
      controller: 'inputCtrl',
      templateUrl: '/input.html'
    })
    .when('/output', {
      controller: 'outputCtrl',
      templateUrl: '/output.html'
    })
    .when('/404', {
      templateUrl: '/404.html'
    })
    .otherwise({ redirectTo: '/404' })

});
