angular
  .module('app')
  .controller('HomeCtrl', ['$scope', 'Review', 'Reviewer', 'Auth', '$rootScope', '$log',
      function($scope, Review, Reviewer, Auth, $rootScope, $log) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.user = {
      email: 'foo@bar.com',
      password: 'foobar'
    };

    $scope.reviews = Review.find({
      filter: {
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }
    });

    $scope.$watch('isLoggedIn', function(newVal){
      $scope.currentUser = Auth.currentUser();
    });

    $scope.logIn = function(form) {
      if (form.$valid) {
        Auth.logIn($scope.user.email, $scope.user.password)
          .then(function(data){
            $scope.isLoggedIn = Auth.isLoggedIn();
            //$scope.currentUser = Auth.currentUser();
          });
      }
    };

    $scope.logOut = function() {
      Auth.logOut();
      $scope.isLoggedIn = Auth.isLoggedIn();
    };

    $scope.addReview = function() {
      Review
        .create($scope.newReview)
        .$promise
        .then(function(review) {
          $scope.newReview = '';
        });
    };
  }]);
