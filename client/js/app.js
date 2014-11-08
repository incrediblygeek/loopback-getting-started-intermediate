angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider'], function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/main.html'
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
