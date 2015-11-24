angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Backand, $http/*, mAppBackend*/) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $http({
    method: 'GET',
    url: Backand.getApiUrl() + '/1/objects/colleagues',
    params: {
      pageSize: 20,
      pageNumber: 1
    }
  }).success(function(response){
    console.log(response.data[1].id);
    $scope.testResults = response.data;
  });
  console.log($scope.testResults);

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MapCtrl', function($scope, $state, $window) {
  // $scope.dev_width = $window.innerWidth;
  // $scope.dev_height = $window.innerHeight;
  $scope.seats4 = [0,1,2,3];

  $scope.anar = function (where) {
    $state.go(where);
  };
});
