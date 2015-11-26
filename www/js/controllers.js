angular.module('mAppControllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ColleaguesCtrl', function($scope, Backand, $http, $ionicScrollDelegate/*, mAppBackend*/) {

  // the controller page is active: we must check updated data?
  //$scope.$on('$ionicView.enter', function(e) {});

  /////////// COLLEAGUES DATA ////////////
  var colleagues = [];

  $http({
    method: 'GET',
    url: Backand.getApiUrl() + '/1/query/data/UnassignedColleagues'
  }).success(function(response,status){ colleagues = response; });

  $scope.getColleagues = function() { return colleagues; };

  ///////////// VIEW UTILS ////////////
  $scope.showAssigned = true;
  $scope.switchAssigned = function(showAssigned) { $scope.showAssigned = showAssigned; }

  $scope.clearSearch = function() { $scope.search = ''; };

  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
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
  $scope.seats4 = [0,1,2,3];
  $scope.anar = function (where) {
    $state.go(where);
  };
});
