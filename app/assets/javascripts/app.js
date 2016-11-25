(function(){

angular.module('house', ['ngResource', 'ngRoute'])

	.controller('ThingsListController', ['$scope', '$resource', function ($scope, $resource) {
		var Thing = $resource('/things/:id', { id:'@id' });

     $scope.things = Thing.query();
     var rooms = ["default", "Yard", "Living Room", "Kitchen", "Bathroom", "Bedroom"]

 		 
     $scope.submit = function() {
       if($scope.item.length > 2 && $scope.room.length > 3 ) {
          Thing.save({ item: $scope.item, room: $scope.room }, function(data) {
            console.log(data);
            $scope.class = 'black';
            $scope.things.push({id:data.id, item:data.item, room:data.room});
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
				 $scope.things.splice($index, 1);
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
