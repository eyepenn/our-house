(function(){
	var app = angular.module('House', ['ngResource'])
	
	app.factory('House', function($resource) {
	  return $resource('/things/:id', { id:'@id' });
	});

	app.controller('ThingsListController', function ($scope, House) {

 		 $scope.things = House.query();

	});
})();


// $scope.submit = function() {
// 	//   $http({
//  //            url: '/things',
//  //            method: "POST",
//  //            data:{item: $scope.item, room: $scope.room}
//  //       	 	}).success(function (data, status) {
// 	// 			$route.reload();
//  //            }).error(function (data, status) {
//  //                $scope.status = status;
//  //            });
            
// 	// 	}