'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'apiService', 'storageService', function($scope, apiService, storageService) {
  $scope.storageTest = storageService.get('storageTest');

  $scope.save = function(key, data) {
    storageService.set(key, data);
    alert(storageService.read());
  }

  $scope.testExport = function() {
    alert(storageService.export())
  }

}]);