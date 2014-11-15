angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('show-reviews', {
        url: '/show',
        templateUrl: 'views/show-reviews.html',
        controller: 'ReviewShowController'
      })
      .state('add-review', {
        url: '/add',
        templateUrl: 'views/add-review.html',
        controller: 'ReviewAddController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      });
    $urlRouterProvider.otherwise('show-reviews');
  }]);

