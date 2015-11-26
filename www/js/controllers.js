angular.module('mAppControllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ColleaguesCtrl', function($scope, Backand, $http/*, mAppBackend*/) {

  // the controller page is active: we must check updated data?
  //$scope.$on('$ionicView.enter', function(e) {});

  $http({
    method: 'GET',
    url: Backand.getApiUrl() + '/1/objects/colleagues',
    params: {
      pageSize: 20,
      pageNumber: 1
    }
  }).success(function(response,status){
    console.log("response id: " + response.data[1].id + " response status: " + status);
    console.log(response.data);
    $scope.colleagues = response.data;
  });
  console.log($scope.testResults);

  $scope.showAssigned = 'true';
  $scope.switchAssigned = function(showAssigned) {
    // document.body.classList.remove('platform-ios');
    // document.body.classList.remove('platform-android');
    // document.body.classList.add('platform-' + p);
    $scope.showAssigned = showAssigned;
    console.log("showAssigned switched to " + showAssigned);
  }

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
