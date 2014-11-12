angular
  .module('app')
  .controller('HomeCtrl', ['$scope', 'Review', function($scope, Review) {
    $scope.isLoggedIn = false;

    $scope.logIn = function(form) {
      console.log(form);
    };

    $scope.reviews = Review.find({
      filter: {
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }
    }, function(reviews) {
      console.log(reviews);
    });

    $scope.addReview = function() {
      Review
        .create($scope.newReview)
        .$promise
        .then(function(review) {
          $scope.newReview = '';
        });
    };
  }]);
