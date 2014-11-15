angular
  .module('app')
  .controller('ReviewShowController', ['$scope', 'Review', function($scope,
      Review) {
    $scope.reviews = Review.find({
      filter: {
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }
    });
  }])
  .controller('ReviewAddController', ['$scope', 'Review', function($scope,
      Review) {
    $scope.addReview = function() {
      Review
        .create($scope.newReview)
        .$promise
        .then(function(review) {
          //clear review fields like content
        });
    };
  }]);
