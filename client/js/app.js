angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/reviews.html',
        controller: 'ReviewsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
