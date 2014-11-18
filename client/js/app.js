angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('show-reviews', {
        url: '/show-reviews',
        templateUrl: 'views/show-reviews.html',
        controller: 'ReviewShowController'
      })
      .state('add-review', {
        url: '/add-review',
        templateUrl: 'views/add-review.html',
        controller: 'ReviewAddController',
        authenticate: true //redirect unauthenticated users
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      });
    $urlRouterProvider.otherwise('show-reviews');
  }])
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('login');
      }
    });
  }]);

