describe('ThingsListController', function() {

	beforeEach(module('house'));

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

		expect(scope.things.length).toBe(3);


	}));

});
//test that array = length of 3 (sorta finished)


//test form submission
//test item was added to array(things collection)
//test item was removed from array on delete 
