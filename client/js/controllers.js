angular
  .module('app')
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.isLoggedIn = true;
  }]);
