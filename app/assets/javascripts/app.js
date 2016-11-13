(function(){

angular.module('house', ['ngResource', 'ngRoute', 'ngMessages'])

	.controller('ThingsListController', ['$scope', '$resource', function ($scope, $resource) {
		var Thing = $resource('/things/:id', { id:'@id' });
 		 
     $scope.things = Thing.query();
 		 
 		 $scope.submit = function() {
			Thing.save({ item: $scope.item, room: $scope.room }, function(data) {
      			$scope.things.push({id:data.id, item:$scope.item, room:$scope.room});
      			$scope.message ='Added!';
            $scope.item={};
            $scope.room.value='';
   				  $scope.addForm.$setPristine();
            $scope.addForm.$setUntouched();
    		});
       	 };

     $scope.remove = function(thing, $index) {
			 Thing.delete({ id: thing.id }, function() {
         console.log(thing.id);
         console.log(thing.item);
         console.log(thing.room);
         console.log($index);
				 $scope.things.splice($index, 1);
				 $scope.message ='Deleted!';
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
