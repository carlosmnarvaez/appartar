
angular.module('fingertipp.controllers')

.controller('OrderPrepareCtrl', function($scope, $rootScope, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {

	$scope.$on('$ionicView.beforeEnter', function(){
		var today = new Date();
		var addTimeSpan = 9 * 60 * 1000; //9min
		today.setTime(today.getTime() + addTimeSpan);

		$scope.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		$scope.selectedMonth = $scope.months[today.getMonth()];

		$scope.days = new Array(31);
		$scope.selectedDay = "" + today.getDate();

		$scope.selectedYear = "" + today.getFullYear();
		$scope.years = [today.getFullYear() - 1, today.getFullYear(), today.getFullYear() + 1];

		$scope.hours = new Array(12);
		$scope.selectedHour = "" + ((today.getHours() - 1) % 12 + 1);

		$scope.mins = new Array(6);
		$scope.selectedMin = ("0" + (Math.floor(today.getMinutes()/10) * 10)).slice(-2);

		$scope.selectedHalf = (today.getHours() > 11) ? 'PM' : 'AM';

		$scope.nums = new Array(10);
		$scope.selectedNum = "4 Personas";


		$ionicNavBarDelegate.title('Book a table');
		$(".order-prepare-date").show();
		$(".order-prepare-time").show();
		$(".order-prepare-num").show();
		$(".order-prepare-join-check").hide();
		$(".order-prepare-join-found").hide();
		$("a:first").text("Next");
		
		$scope.checkJoinCode = false;
		$scope.orderType = 0;
	});
	
	$scope.onTapItem = function(index){
		$scope.orderType = index;

		switch (index)
		{
		case 0:
			$ionicNavBarDelegate.title('Book a table');
			$(".order-prepare-date").show();
			$(".order-prepare-time").show();
			$(".order-prepare-num").show();

			$(".order-prepare-join-check").hide();
			$(".order-prepare-join-found").hide();
			$("a:first").text("Next");
			break;
		case 1:
			$ionicNavBarDelegate.title('Take away');
			$(".order-prepare-date").show();
			$(".order-prepare-time").show();
			$(".order-prepare-num").hide();

			$(".order-prepare-join-check").hide();
			$(".order-prepare-join-found").hide();
			$("a:first").text("Next");
			break;
		case 2:
			$ionicNavBarDelegate.title('Join table');
			$(".order-prepare-date").hide();
			$(".order-prepare-time").hide();
			$(".order-prepare-num").hide();

			$(".order-prepare-join-check").show();
			$(".order-prepare-join-found").hide();
			$scope.checkJoinCode = false;
			$("a:first").text("Check");
			break;
		}
	}

	$scope.onNext = function(event){
		if ($scope.orderType === 2 && $scope.checkJoinCode === false)				//Join table
		{
			$(".order-prepare-join-found").show();
			$(".order-prepare-join-check").hide();
			$scope.checkJoinCode = true;
			$("a:first").text("Join Table");
			return;
		}
		order_type = $scope.orderType;
		order_date_time = new Date();
		order_people_num = 4;
		initMenu = true;
		$utils.goState("app.order-menu", {});
	}
});
