angular
  .module('app')
  .directive('reviewForm', ['Review', function(Review) {
      return {
        restrict: 'E',
        replace: true,
        templateurl: 'views/review-form.html',
        controller: ['$scope', '$attrs', 'Review', function($scope, $attrs,
            Review) {
        }]
      }
    }]);
