
angular.module('fingertipp.controllers')

.controller('RestaurantsCtrl', function($scope, $rootScope, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {
	
	$scope.$on('$ionicView.beforeEnter', function(){
		cur_root = "app.restaurants";
	});

	$scope.restaurants = restaurants;

	$scope.onToggleMenu = function(ev){

		// $rootScope.disableSearch = true;
		// $timeout(function(){
		// 	$rootScope.disableSearch = false;
		// }, 400);

		$ionicSideMenuDelegate.toggleLeft();
	}

	$scope.onTapItem = function(index){
		sel_restaurant_index = index;
		$utils.goState("app.restaurant-detail", {});
	}

	$scope.getMemo = function(option){
		if (option == 1)
			return "Take Away Only";
		else if (option == -1)
			return "No Take Away";

		return "";
	}
});
