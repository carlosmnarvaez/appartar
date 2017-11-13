angular.module('fingertipp.controllers')

.controller('MyOrdersCtrl', function($scope, $rootScope, $ionicPopup, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {
	
	$scope.$on('$ionicView.beforeEnter', function(){
		cur_root = "app.myorders";
	});

	$scope.myorders = myorders;
	$scope.restaurants = restaurants;
});
