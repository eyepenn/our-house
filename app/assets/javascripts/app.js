(function(){

angular.module('house', ['ngResource', 'ngRoute'])
	.controller('ThingsListController', ['$scope', '$resource', function ($scope, $resource) {
		var Thing = $resource('/things/:id', { id:'@id' });
		
 		 
 		 $scope.things = Thing.query();
 		 
 		 $scope.submit = function() {
			Thing.save({ item: $scope.item, room: $scope.room }, function() {
      			$scope.things.push({item:$scope.item, room:$scope.room});
				$scope.item ='';
				$scope.room ='';
   				$scope.addForm.$setPristine();
   				$scope.addForm.$setUntouched();
    		});
       	 };

       	 $scope.remove = function(thing, $index) {
	 			//console.log(thing.id);
	 			//console.log($index);
			Thing.delete({ id: thing.id }, function(){
				 $scope.things.splice($index, 1);
     	   	   });
       	 };
	}]);

})();
