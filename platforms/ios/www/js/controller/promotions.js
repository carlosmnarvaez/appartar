
angular.module('fingertipp.controllers')

.controller('PromotionsCtrl', function($scope, $rootScope, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {
	$scope.$on('$ionicView.beforeEnter', function(){
		cur_root = "app.promotions";
	});
	
	$scope.promotions = promotions;

	$scope.onTapItem = function(index){
		sel_promotion_index = index;
		$utils.goState("app.promotion-detail", {});
	}
});
