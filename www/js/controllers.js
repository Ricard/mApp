angular.module('mAppControllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ColleaguesCtrl', function($scope, $ionicScrollDelegate, Colleagues) {

  // the controller page is active: we must check updated data?
  //$scope.$on('$ionicView.enter', function(e) {});

  // handle colleagues service
  $scope.getColleagues = function() {

    $scope.assignedCount = Colleagues.getAssignedCount();
    $scope.unassignedCount = Colleagues.getUnassignedCount();
    return ($scope.showAssigned) ? Colleagues.getAssigned() : Colleagues.getUnassigned();
  };

  // define if list show assigned/unassigned colleagues
  $scope.showAssigned = true;
  $scope.switchAssigned = function(option) { $scope.showAssigned = option; }

  // search box content
  $scope.search = '';
  $scope.clearSearch = function() { $scope.search = ''; };

  // go to top of list
  $scope.scrollTop = function() { $ionicScrollDelegate.scrollTop(); };
})

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
// })

.controller('MapCtrl', function($scope, $state, $window) {
  $scope.seats4 = [0,1,2,3];
  $scope.anar = function (where) {
    $state.go(where);
  };
});
