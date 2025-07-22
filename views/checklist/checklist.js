'use strict';

angular.module('myApp.checklist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checklist', {
    templateUrl: 'views/checklist/checklist.html',
    controller: 'ChecklistCtrl'
  });
}])

.controller('ChecklistCtrl', ['$scope', '$document', function($scope, $document) {

  $scope.ages = [
    0,  // 0
    2,  // 1
    3,  // 2
    4,  // 3
    6,  // 4
    8,  // 5 Removed
    9, // 6
    12, // 7
    14, // 8 Removed
    16, // 9
    17, // 10 Removed
    18, // 11
    20, // 12 Removed
    22, // 13 Removed
    28, // 14
    32, // 15
    34, // 16
    36, // 17
    48, // 18
    60  // 19
  ];

  $scope.currentAge;
  $scope.currentSection;

  $scope.selectAge = function(index) {
    $scope.currentAge = $scope.ages[index];
  }

  $scope.selectAge(0);
  $scope.currentSection = 0;

}]);
