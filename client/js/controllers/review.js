angular
  .module('app')
  .controller('AddReviewController', ['$scope', 'CoffeeShop', 'Review',
      '$state', function($scope, CoffeeShop, Review, $state) {
    $scope.coffeeShops = [];
    $scope.selectedShop;
    $scope.rating;
    $scope.comments;

    CoffeeShop.find()
      .$promise
      .then(function(coffeeShops) {
        $scope.coffeeShops = coffeeShops;
        $scope.selectedShop = $scope.selectedShop || coffeeShops[0];
      });

    $scope.addReview = function(form) {
      Review
        .create({
          rating: $scope.rating,
          comments: $scope.comments,
          coffeeShopId: $scope.selectedShop.id
        })
        .$promise
        .then(function(review) {
          $state.go('show-reviews');
        });
    };
  }])
  .controller('DeleteReviewController', ['$scope', 'Review', '$state',
      '$stateParams', function($scope, Review, $state, $stateParams) {
    Review.deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('show-my-reviews');
      });
  }])
  .controller('ShowReviewsController', ['$scope', 'Review', function($scope,
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
  .controller('ShowMyReviewsController', ['$scope', 'Review', '$rootScope',
      function($scope, Review, $rootScope) {
    $scope.reviews = Review.find({
      filter: {
        where: {
          publisherId: $rootScope.currentUser.id
        },
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }
    });
  }]);
