angular.module('mAppServices', [])

.factory('Colleagues', function($http, Backand) {
  // var colleagues = [];
  var assignedColleagues = [];
  var unassignedColleagues = [];

  $http({ method: 'GET', url: Backand.getApiUrl() + '/1/query/data/UnassignedColleagues'})
    .success(function(response){ unassignedColleagues = response;
      console.log("get unassigned OK"); console.log(unassignedColleagues);});

  $http({ method: 'GET', url: Backand.getApiUrl() + '/1/query/data/AssignedColleagues'})
    .success(function(response){ assignedColleagues = response;
      console.log("get assigned OK"); console.log(assignedColleagues);});

  return {
    getUnassigned: function() {return unassignedColleagues;},
    getAssigned: function() {return assignedColleagues;},
    getUnassignedCount: function() {return unassignedColleagues.length;},
    getAssignedCount: function() {return assignedColleagues.length;}
  };

});
