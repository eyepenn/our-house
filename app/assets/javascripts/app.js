(function(){
	var app = angular.module('house', [ ]);

	app.controller('ThingsListController', function ThingsListController($scope){
		$scope.things = [
			{ 
				item: 'flowers',
				room: 'yard'
			}, {
				item: 'area rug',
				room: 'living room'
			}, {
				item: 'toothbrush',
				room: 'bathroom'
			}
		];
	});	
})();

