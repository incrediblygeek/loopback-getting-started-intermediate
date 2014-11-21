angular
  .module('app')
  .controller('AddReviewController', ['$scope', 'CoffeeShop', 'Review',
      '$state', function($scope, CoffeeShop, Review, $state) {
    $scope.action = 'Add';
    $scope.coffeeShops = [];
    $scope.selectedShop;
    $scope.review = {};

    CoffeeShop
      .find()
      .$promise
      .then(function(coffeeShops) {
        $scope.coffeeShops = coffeeShops;
        $scope.selectedShop = $scope.selectedShop || coffeeShops[0];
      });

    $scope.submitForm = function() {
      Review
        .create({
          rating: $scope.review.rating,
          comments: $scope.review.comments,
          coffeeShopId: $scope.selectedShop.id
        })
        .$promise
        .then(function() {
          $state.go('show-reviews');
        });
    };
  }])
  .controller('DeleteReviewController', ['$scope', 'Review', '$state',
      '$stateParams', function($scope, Review, $state, $stateParams) {
    Review
      .deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('show-my-reviews');
      });
  }])
  .controller('EditReviewController', ['$scope', '$q', 'CoffeeShop', 'Review',
      '$stateParams', '$state', function($scope, $q, CoffeeShop, Review,
      $stateParams, $state) {
    $scope.action = 'Edit';
    $scope.coffeeShops = [];
    $scope.selectedShop;
    $scope.review = {};

    $q
      .all([
        CoffeeShop.find().$promise,
        Review.findById({ id: $stateParams.id }).$promise
      ])
      .then(function(data) {
        var coffeeShops = $scope.coffeeShops = data[0];
        $scope.review = data[1];
        $scope.selectedShop;

        var selectedShopIndex = coffeeShops
          .map(function(coffeeShop) {
            return coffeeShop.id;
          })
          .indexOf($scope.review.coffeeShopId);
        $scope.selectedShop = coffeeShops[selectedShopIndex];
      });

    $scope.submitForm = function() {
      $scope.review.coffeeShopId = $scope.selectedShop.id;
      $scope.review
        .$save()
        .then(function(review) {
          $state.go('show-reviews');
        });
    };
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
  .controller('MyReviewsController', ['$scope', 'Review', '$rootScope',
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
