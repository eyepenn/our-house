(function(){

angular.module('house', ['ngResource', 'ngRoute', 'thingsService'])

	.controller('ThingsListController', ['$scope', '$resource', 'things', function ($scope, $resource, things) {
		var Thing = $resource('/things/:id', { id:'@id' });
     $scope.things = things;
     $scope.item = '';
     $scope.room = '';
     things.collection = Thing.query();
     var rooms = ["default", "Yard", "Living Room", "Kitchen", "Bathroom", "Bedroom"]

 		 
     $scope.submit = function() {
      console.log($scope.item);
      console.log($scope.room);
      if($scope.item.length > 2 && $scope.room.length > 3 ) {
      things.submit($scope.item, $scope.room, function(data){
            $scope.class = 'black';
            $scope.tab = rooms.indexOf($scope.room);
            $scope.item = '';
            $scope.room = '';
            $scope.addForm.$setPristine();
            $scope.addForm.$setUntouched();
            });
      } else {
      $scope.class = 'red';
      };
       	 };

     $scope.remove = function(thing, $index) {
			 Thing.delete({ id: thing.id }, function() {
				 things.collection.splice($index, 1);
     	  });
      };

     $scope.search = function(thing){
    		if (!$scope.query || (thing.item.toLowerCase().indexOf($scope.query) != -1) || (thing.room.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
         	return true;
   		 	}
    	 		return false;
        };

	}]);

})();
