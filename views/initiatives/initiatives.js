'use strict';

angular.module('myApp.initiatives', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/initiatives', {
    templateUrl: 'views/initiatives/initiatives.html',
    controller: 'InitiativesCtrl'
  });
}])

.controller('InitiativesCtrl', [function() {

}]);