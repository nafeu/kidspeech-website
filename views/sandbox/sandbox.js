'use strict';

angular.module('myApp.sandbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sandbox', {
    templateUrl: 'views/sandbox/sandbox.html',
    controller: 'SandboxCtrl'
  });
}])

.controller('SandboxCtrl', ['$scope', '$document', function($scope, $document) {

  $scope.ages = [0, 2, 3, 4, 6, 8, 10, 12, 14, 16, 17, 18, 20, 22, 28, 32, 34, 36, 48, 60];
  $scope.currentAge;
  $scope.currentSection;

  $scope.selectAge = function(index) {
    $scope.currentAge = $scope.ages[index];
  }

  $scope.selectAge(0);
  $scope.currentSection = 0;

}]);