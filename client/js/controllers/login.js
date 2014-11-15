angular
  .module('app')
  .controller('LoginController', ['$scope', 'AuthService', '$log', function(
      $scope, AuthService, $log) {
    $scope.user = {
      email: 'foo@bar.com',
      password: 'foobar'
    };

    $scope.login = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        AuthService.login($scope.user.email, $scope.user.password)
          .then(function(data) {
            $log.log(data);
          });
      }
    };
  }]);
