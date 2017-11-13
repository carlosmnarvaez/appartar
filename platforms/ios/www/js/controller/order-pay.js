angular.module('fingertipp.controllers')

.controller('OrderPayCtrl', function($scope, $ionicPopup, $rootScope, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {
	$scope.$on('$ionicView.beforeEnter', function(){
		$scope.paySuccess = paySuccess;
	});
	
	$scope.onOK = function() {
		$utils.goState('app.feedback', {});
	}

	$scope.onRetry = function() {
		$ionicHistory.goBack();
	}
});
