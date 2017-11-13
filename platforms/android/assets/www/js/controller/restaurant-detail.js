
angular.module('fingertipp.controllers')

.controller('RestaurantDetailCtrl', function($scope, $rootScope, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {

	$scope.$on('$ionicView.beforeEnter', function(){
		$scope.restaurant = restaurants[sel_restaurant_index];
	});

	$scope.viewMenu = function(){
		$ionicHistory.goBack();
	}

	$scope.order = function(){
		$utils.goState("app.order-prepare", {});
	}
});
