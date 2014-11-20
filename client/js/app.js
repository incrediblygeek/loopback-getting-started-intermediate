angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('add-review', {
        url: '/add-review',
        templateUrl: 'views/add-review.html',
        controller: 'AddReviewController',
        authenticate: true
      })
      .state('delete-review', {
        url: '/delete-review/:id',
        controller: 'DeleteReviewController',
        authenticate: true
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      })
      .state('show-reviews', {
        url: '/show-reviews',
        templateUrl: 'views/show-reviews.html',
        controller: 'ShowReviewsController'
      })
      .state('show-my-reviews', {
        url: '/show-my-reviews',
        templateUrl: 'views/show-my-reviews.html',
        controller: 'ShowMyReviewsController',
        authenticate: true
      });
    $urlRouterProvider.otherwise('show-reviews');
  }])
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('forbidden');
      }
    });
  }]);
