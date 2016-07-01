angular.module('starter.services', [])

.factory('Peoples', function($http){
    return {
      get:function (cb) {
        $http.get('http://swapi.co/api/people').
          success(function(data) {
              cb(data);
        });
      }
    }
})

.factory('Planets', function($http) {
  return {
      get:function (cb) {
        $http.get('http://swapi.co/api/planets').
          success(function(data) {
              cb(data);
        });
      },
      getPlanetDetails: function(planetId, cb){
        $http.get('http://swapi.co/api/planets/'+planetId).
          success(function(data) {
            cb(data);
        });
      }
    }
});
