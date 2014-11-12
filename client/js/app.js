angular
  .module('app', ['ui.router', 'lbServices'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      });
    $urlRouterProvider.otherwise('home');
  }]);
