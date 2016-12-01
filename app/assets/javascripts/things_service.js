angular.module('thingsService', ['ngResource'])
	.service('things', ['$resource', function ($resource) {
		var Thing = $resource('/things/:id', { id:'@id' });
		this.collection = [];
		this.submit = function(item, room, callback) {
			var _this = this;
      	 
          Thing.save({ item: item, room: room }, function(data) {
          	callback(data);
          	_this.collection.push({id:data.id, item:data.item, room:data.room});

          });       
       
       	 };


	}]);