angular.module('fingertipp.controllers')

.controller('OrderMenuCtrl', function($scope, $rootScope, $ionicPopup, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {


	// var createArray = function(size, defaultVal) {
	//     var arr = new Array(size);
	//     if (arguments.length == 2) {
	//         // optional default value
	//         for (i = 0; i < size; ++i) {
	//             arr[i] = defaultVal;
	//         }
	//     }
	//     return arr;
	// }


	$scope.$on('$ionicView.beforeEnter', function(){
		if (initMenu == true){
			$scope.sel_dish_type = 0;
			$scope.foods = restaurants[sel_restaurant_index].food;
			$scope.orderedDishes = [[0,0,0,0], [0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0]];
			$scope.shownDish = null;
			initMenu = false;
		}
	});

	$scope.onTabSelChanged = function(index){
		$scope.sel_dish_type = index;
	}

	$scope.getTabStyle = function(index){
		if ($scope.sel_dish_type === index)
			return "border-bottom: 2px solid red;";
		return "border-bottom: 2px solid pink;";
	}

	$scope.isDishShown = function(dish) {
		return $scope.shownDish === dish;
	};

	$scope.toggleDish = function(dish) {
		if ($scope.isDishShown(dish)) {
			$scope.shownDish = null;
		} else {
			$scope.shownDish = dish;
		}
	};

	$scope.getButtonMin = function(group, index) {
		if($scope.orderedDishes[group][index] > 0)
			return "button button-small button-clear button-assertive";

		return "button button-small button-clear button-light";
	}

	$scope.onClickMin = function(group, index) {
		if ($scope.orderedDishes[group][index] > 0)
			$scope.orderedDishes[group][index] --;
	}

	$scope.onClickPlus = function(group, index) {
		$scope.orderedDishes[group][index] ++;
	}

	$scope.getOrderedCount = function(group, index) {
		return $scope.orderedDishes[group][index];
	}

	$scope.confirmOrder = function(){
		orderedDishes = $scope.orderedDishes;
		var i, j;
		for (i=0; i<orderedDishes.length; i++)
		{
			for (j=0; j<orderedDishes[i].length; j++)
				if (orderedDishes[i][j] > 0)
					break;
			if (j < orderedDishes[i].length)
				break;
		}
		
		if (i < orderedDishes.length)
			$utils.goState("app.order-confirm", {});
		else
			$ionicPopup.alert({ 
				title: 'Fingertipp',
				content: 'Order one or more dishes, please.'
			});
	}

});
