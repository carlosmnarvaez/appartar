angular.module('fingertipp.controllers')

.controller('OrderConfirmCtrl', function($scope, $ionicPopup, $rootScope, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils, $ionicLoading, $http) {

	$scope.calcPrices = function() {
		$scope.orderedPrice = 0;
		$scope.orderedDishes = [];
		var k = 0;
		var foods = restaurants[sel_restaurant_index].food;
		for (i=0; i<foods.length; i++)
			for (j=0; j<foods[i].dishes.length; j++)
				if (orderedDishes[i][j] > 0)
				{
					$scope.orderedPrice += orderedDishes[i][j] * foods[i].dishes[j].price;

					$scope.orderedDishes[k] = {"dish" : foods[i].dishes[j], "group" : i, "index" : j};
					k ++;
				}

		var gst = 0;
		$scope.gstPrice = $scope.orderedPrice * gst / 100.0;
		$scope.totalPrice = $scope.gstPrice + $scope.orderedPrice;
	}

	$scope.$on('$ionicView.beforeEnter', function(){
		$scope.username = username;
		$scope.peopleNum = order_people_num;
		$scope.orderDate = order_date_time;
		$scope.restaurantName = restaurants[sel_restaurant_index].title;
		$scope.orderType = order_type;
		$scope.orderedDishesNum = orderedDishes;

		$scope.user_time = username + ", Today at 12:20 PM";
		$scope.table_restaurant = "Table for 4, " + $scope.restaurantName;

		$scope.calcPrices();
	});
	
	$scope.getPriceString = function(price){
		return price.toFixed(0);
	}

	$scope.getButtonMin = function(group, index) {
		if($scope.orderedDishesNum[group][index] > 0)
			return "button button-small button-clear button-assertive";

		return "button button-small button-clear button-light";
	}

	$scope.onClickMin = function(i) {
		var group = $scope.orderedDishes[i].group;
		var index = $scope.orderedDishes[i].index;
		if (orderedDishes[group][index] > 1)
			orderedDishes[group][index] --;
		else if (orderedDishes[group][index] === 1)
			$scope.confirmDelete(i);
		$scope.calcPrices();
	}

	$scope.onClickPlus = function(i) {
		var group = $scope.orderedDishes[i].group;
		var index = $scope.orderedDishes[i].index;
		orderedDishes[group][index] ++;
		$scope.calcPrices();
	}

	$scope.confirmDelete = function(i) {
		var group = $scope.orderedDishes[i].group;
		var index = $scope.orderedDishes[i].index;
		var confirmPopup = $ionicPopup.confirm({
		   title: "Cancel Order",
		   template: "Do you really cancel this order?",
		   okText: "Yes",
		   okType: 'button-default',
		   cancelText: "No",
		   cancelType: 'button-positive'
		 });
		 confirmPopup.then(function(res) {
		   if(res) {
		     //////////////////////
			 orderedDishes[group][index] = 0;
			 $scope.calcPrices();
		   } else {
		     
		   }
		 });
	}

	$scope.hideSuccess = function(success) {
		$ionicLoading.hide();

		paySuccess = success;
		totalPrice = $scope.totalPrice;
		$utils.goState("app.order-pay", {});
	}

	$scope.onPay = function(){

		$ionicLoading.show({
			template: '<p>Wait for response...</p><ion-spinner></ion-spinner>',
			scope: $scope
		});
		$timeout(function(){
			$scope.hideSuccess(true);
		}, 5000);

		// var dishes = [];
		// for (i=0; i < $scope.orderedDishes.length; i++)
		// {
		// 	dishes.push({
		// 		"id"			: $scope.orderedDishes[i].dish.id,
		// 		"title"			: $scope.orderedDishes[i].dish.name,
		// 		"description"	: $scope.orderedDishes[i].dish.description,
		// 		"cost"			: $scope.orderedDishes[i].dish.price,
		// 		"menu_id"		: $scope.orderedDishes[i].group,
		// 		"restaurant_id"	: 1
		// 	});
		// }
		// var url = 'http://128.199.211.203/api/reservation/';
		// var params = JSON.stringify({
		// 	    "time" : order_date_time.toISOString(),
		// 	    "notes" : "test notes",
		// 	    "num_people" : order_people_num,
		// 	    "restaurant_id" : 1, //sel_restaurant_index
		// 	    "order_items" : dishes,
		// 	    "guest_id" : 1,
		// 	    "social_id" : "1234"
		//     });
		// var header = {headers: {'Content-Type': 'application/json'}};
		// $http.post(url, params, header).
		// 	  success(function(data, status, headers, config) {
		//         	console.log(data);
		//         	if (data.errors != null)
		//         	{
		//         		$scope.hideSuccess(false);
		//         		return;
		//         	}

		//         	url = 'http://128.199.211.203/api/reservation/confirm/1/';
		//         	$http.get(url).
		//         		success(function(response) {
		//         			console.log(response);
		//         			if (response.errors != null)
		//         				$scope.hideSuccess(false);
		//         			else
		//         				$scope.hideSuccess(true);
		//         		}).
		//         		error(function(response) {
		//         			$scope.hideSuccess(false);
		//         		});
		//       }).
		//       error(function(data, status, headers, config) {
		//         	$scope.hideSuccess(false);
		//       });
		// var req = {
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	data: {
		// 	    "time" : order_date_time.toISOString(),
		// 	    "notes" : "test notes",
		// 	    "num_people" : order_people_num,
		// 	    "restaurant_id" : sel_restaurant_index,
		// 	    "order_items" : [],
		// 	    "guest_id" : 1,
		// 	    "social_id" : "1234"
		//     }
		// }
		// );
	}
});
