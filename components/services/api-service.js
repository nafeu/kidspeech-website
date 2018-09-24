'use strict';

app.service('apiService', function($http) {
  this.foo = function() {
    return "bar";
  }
});
