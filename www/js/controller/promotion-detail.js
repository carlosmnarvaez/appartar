
angular.module('fingertipp.controllers')

.controller('PromotionDetailCtrl', function($scope, $rootScope, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {

	$scope.$on('$ionicView.beforeEnter', function(){
		$scope.promotion = promotions[sel_promotion_index];
	});

	$scope.viewMenu = function(){
		$ionicHistory.goBack();
	}

	$scope.redeem = function(){
		$utils.goState("app.promotion-pay", {});
	}
});
