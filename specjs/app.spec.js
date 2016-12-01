describe('ThingsListController', function() {

	beforeEach(module('house', 'thingsService'));

	it('should create a "things" model with 3 things', inject(function($controller, _$httpBackend_) {
		var scope = {};
		var $httpBackend = _$httpBackend_;

		$httpBackend.when('GET', '/things')
		.respond([
		{
			item: 'Lamp',  
			room: 'Living Room'
		}, 
		{
			item: 'Blender',
			room: 'Kitchen',
		},
		{
			item: 'Bed',
			room: 'Bedroom'
		}

		]);

		$httpBackend.expectGET('/things');
		var ctrl = $controller('ThingsListController', {$scope: scope});
		$httpBackend.flush();

		expect(scope.things.collection.length).toBe(3);


	}));

it('should add a thing to "things" array for total of 4', inject(function(things, _$httpBackend_) {
		var scope = {};
		var $httpBackend = _$httpBackend_;


		$httpBackend.when('POST', '/things')
		.respond(

		{
			id: 1,
			item: 'Armchair',  
			room: 'Living Room'
		}
		);

		//$httpBackend.expectGET('/things');
		//$httpBackend.expectPOST('/things');
		//var ctrl = $controller('ThingsListController', {$scope: scope});
		scope.item = 'Armchair';
		scope.room = 'Living Room';
		things.submit('Armchair', 'Living Room', function(){});
		//scope.apply();
		//console.log(scope.things);
        $httpBackend.flush();

		expect(things.collection.length).toBe(1);


	}));	

});