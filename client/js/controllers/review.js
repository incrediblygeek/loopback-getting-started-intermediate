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
  .controller('ReviewAddController', ['$scope', 'CoffeeShop', 'Review',
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
  }]);
