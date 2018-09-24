'use strict';

angular.module('myApp.sandbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sandbox', {
    templateUrl: 'views/sandbox/sandbox.html',
    controller: 'SandboxCtrl'
  });
}])

.controller('SandboxCtrl', [function() {

}]);