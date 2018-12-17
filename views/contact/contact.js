'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'views/contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', [function() {

}]);

angular.module('myApp.thankyou', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/thankyou', {
    templateUrl: 'views/contact/thankyou.html',
    controller: 'ThankYouCtrl'
  });
}])

.controller('ContactCtrl', [function() {

}]);

angular.module('myApp.error', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'views/contact/error.html',
    controller: 'ErrorCtrl'
  });
}])

.controller('ContactCtrl', [function() {

}]);