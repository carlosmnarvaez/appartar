

angular.module('fingertipp.controllers', [])

.controller('MenuCtrl', function($scope, $rootScope, $ionicModal, $timeout, $utils, $ionicHistory) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.onTapItem = function(state){
    $utils.goState(state, {});
  }

  $scope.isCurrentScreen = function(state) {
  	return cur_root == state;
  }

  $scope.itemStyle = function(state) {
  	if (cur_root == state)
  		return "background-color:black;";

  	return "";
  }
})
