angular.module('starter.controllers', [])

.controller('PeopleCtrl', function($scope, Peoples){
   Peoples.get(function (data) {
      $scope.peopleList = data.results;
    });
    
})

.controller('PlanetsCtrl', function($scope, Planets) {
  Planets.get(function(data){
    $scope.planets = data.results;
  })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
