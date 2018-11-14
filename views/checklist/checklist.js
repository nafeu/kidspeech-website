'use strict';

angular.module('myApp.checklist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checklist', {
    templateUrl: 'views/checklist/checklist.html',
    controller: 'ChecklistCtrl'
  });
}])

.controller('ChecklistCtrl', ['$scope', '$document', function($scope, $document) {

  $scope.ages = [0, 2, 3, 4, 6, 8, 10, 12, 14, 16, 17, 18, 20, 22, 28, 32, 34, 36, 48, 60];
  $scope.currentAge;
  $scope.currentSection;

  $scope.selectAge = function(index) {
    $scope.currentAge = $scope.ages[index];
  }

  $scope.selectAge(0);
  $scope.currentSection = 0;

}]);