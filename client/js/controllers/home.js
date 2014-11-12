angular
  .module('app')
  .controller('HomeCtrl', ['$scope', 'Review', function($scope, Review) {
    $scope.isLoggedIn = false;

    $scope.logIn = function(form) {
      console.log(form);
    };

    $scope.reviews = [];
    function getReviews() {
      Review
        .find()
        .$promise
        .then(function(reviews) {
          $scope.reviews = reviews;
        });
      Review.findOne().$promise.then(function(review) {
        console.log(review);
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
