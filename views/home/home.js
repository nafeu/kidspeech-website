'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'apiService', 'storageService', function($scope, apiService, storageService) {

  $('.carousel').carousel({
    interval: 5000
  })

  $('.carousel-control-next').click(function(event){
    event.preventDefault();
  });
  $('.arousel-control-prev').click(function(event){
    event.preventDefault();
  });

}]);