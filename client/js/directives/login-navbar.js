angular
  .module('app')
  .directive('loginNavbar', ['Auth', function(Auth) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/login-navbar.html',
      controller: ['$scope', '$attrs', 'Auth', function($scope, $attrs, Auth) {
        $scope.isLoggedIn = Auth.isLoggedIn();
        $scope.user = {
          email: 'foo@bar.com',
          password: 'foobar'
        };

        $scope.$watch('isLoggedIn', function(newVal) {
          $scope.currentUser = Auth.currentUser();
        });

        $scope.logIn = function(form) {
          if (form.$valid) {
            Auth.logIn($scope.user.email, $scope.user.password)
              .then(function(data){
                $scope.isLoggedIn = Auth.isLoggedIn();
              });
          }
        };

        $scope.logOut = function() {
          Auth.logOut();
          $scope.isLoggedIn = Auth.isLoggedIn();
        };
      }]
    }
  }]);
