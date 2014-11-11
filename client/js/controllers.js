angular
  .module('app')
  .controller('HomeCtrl', ['$scope', function($scope, Review) {
    $scope.isLoggedIn = true;

    // get reviews
    $scope.reviews = [];
    function getReviews() {
      Review
        .find()
        .$promise
        .then(function(reviews) {
          $scope.reviews = reviews;
        });
    };
    getReviews();

    $scope.addReview = function() {
      Review
        .create($scope.newReview)
        .$promise
        .then(function(review) {
          $scope.newReview = '';
        });
    };
  }]);
