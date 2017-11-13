angular.module('fingertipp.controllers')

.controller('PromotionPayCtrl', function($scope, $ionicPopup, $rootScope, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {
	// $scope.$on('$ionicView.beforeEnter', function(){
	// 	$scope.paySuccess = paySuccess;
	// });
	
	$scope.onPreOrder = function() {
		$utils.goState('app.order-prepare', {});
	}

	$scope.onLater = function() {
		$utils.goState('app.promotions', {});
	}
});
