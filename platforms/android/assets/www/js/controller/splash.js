
angular.module('fingertipp.controllers')

.controller('SplashCtrl', function($scope, $rootScope, $ionicScrollDelegate, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $ionicHistory, $timeout, $cordovaStatusbar, $cordovaDatePicker, $utils) {
	var startApp = function() {
	    $utils.goState("app.restaurants", {});

	    // Set a flag that we finished the tutorial
	    window.localStorage['didSplash'] = true;
	  };

	 // if(window.localStorage['didSplash'] === "true") {
	 //    	startApp();
	 //  }
	 //  else{
		  setTimeout(function () {
				startApp();
			}, 2000);
	  // }
});
