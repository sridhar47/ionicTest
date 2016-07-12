var config = {};
    config.baseUrl = 'http://localhost:1337/';
    config.people = 'get/people';
    config.planets = 'get/planets';
    config.planetDetails = 'planet/';
    config.peopleDetails = 'people/'
angular.module('starter.services', [])

.factory('Peoples', function($http){
    return {
      get:function (cb) {
        $http.get(config.baseUrl+config.people).
          success(function(data) {
              cb(data);
        });
      },
      getPeopleDetails: function(peopleId, cb){
        $http.get(config.baseUrl+config.peopleDetails+peopleId).
          success(function(data) {
            cb(data);
        });
      }
    }
})

.factory('Planets', function($http) {
  return {
      get:function (cb) {
        $http.get(config.baseUrl+config.planets).
          success(function(data) {
              cb(data);
        });
      },
      getPlanetDetails: function(planetId, cb){
        $http.get(config.baseUrl+config.planetDetails+planetId).
          success(function(data) {
            cb(data);
        });
      }
    }
});
