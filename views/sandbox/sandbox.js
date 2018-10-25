'use strict';

angular.module('myApp.sandbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sandbox', {
    templateUrl: 'views/sandbox/sandbox.html',
    controller: 'SandboxCtrl'
  });
}])

.controller('SandboxCtrl', ['$scope', '$document', function($scope, $document) {

  $scope.ages = ["2", "2-4", "4", "6", "8", "10", "12", "14", "16", "16-18", "18", "20", "22", "28", "32", "34", "36", "48", "60"];
  $scope.expressions = ["Coos", "Laughs", "Babbles", "Mama/Dada", "1st Word", "4-6 Single Words", "Tells Needs", "2-Word Sentences", "50+ Single Words", "Uses Nouns & Verbs", "Talks in Sentences", "Uses All Speech Sounds"];
  $scope.currentAge;
  $scope.currentExpression;

  $scope.selectCell = function(index) {
    $scope.currentAge = $scope.ages[index];
    $scope.currentExpression = $scope.expressions[index];
  }

  $scope.selectCell(0);

}]);