angular
  .module('app')
  .controller('ReviewsCtrl', ['$scope', function($scope) {
    $scope.reviews = [
      {
        userName: 'john',
        date: Date.now(),
        shopName: 'Starbucks',
        content: 'review 1'
      },
      {
        userName: 'jane',
        date: Date.now(),
        shopName: 'Starbucks',
        content: 'review 2'
      },
      {
        userName: 'jack',
        date: Date.now(),
        shopName: 'Starbucks',
        content: 'review 1'
      },
    ];
  }]);
