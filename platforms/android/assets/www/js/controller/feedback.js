angular.module('fingertipp.controllers')

.controller('FeedbackCtrl', function($scope, $ionicPopup, $rootScope, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {

	$scope.emotions = [
		{
			title : 'Yuck',
			src : './img/icon/mood-yuck.png'
		},
		{
			title : 'Bad',
			src : './img/icon/mood-bad.png'
		},
		{
			title : 'Alright',
			src : './img/icon/mood-alright.png'
		},
		{
			title : 'Great',
			src : './img/icon/mood-great.png'
		},
		{
			title : 'Amazing',
			src : './img/icon/mood-amazing.png'
		}
	];

	$scope.mood = 4;
	$scope.onEmotion = function(index) {
		$scope.mood = index;
	}

	$scope.onSubmit = function() {
		$utils.goState('app.restaurants');
	}
});
