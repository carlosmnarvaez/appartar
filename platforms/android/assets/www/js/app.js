

// Ionic fingertipp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'fingertipp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'fingertipp.controllers' is found in controllers.js
angular.module('fingertipp', ['ionic', 'fingertipp.controllers', 'fingertipp.services', 'ngCordova'])

.run(function($rootScope, $ionicPlatform, $ionicHistory, $ionicSideMenuDelegate, $timeout, $cordovaDialogs, $ionicPopup) {
  $ionicPlatform.ready(function() {

    if (navigator.splashscreen){
          navigator.splashscreen.hide();
    }
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    if (ionic.Platform.isAndroid())
      ionic.Platform.isFullScreen = true; 

    // Back button event
    $ionicPlatform.registerBackButtonAction(function(event){

          // if ($(".backdrop-loading").length > 0)
          //       return;
              
          if ($ionicHistory.currentStateName() == "app.restaurants"){
                var confirmPopup = $ionicPopup.confirm({
                   title: "Quit Fingertipp",
                   template: CONFIG.sure_quit,
                   okText: "Yes",
                   okType: 'button-default',
                   cancelText: "No",
                   cancelType: 'button-positive'
                 });
                 confirmPopup.then(function(res) {
                   if(res) {
                     ionic.Platform.exitApp();
                   } else {
                     
                   }
                 });
          }else
                $ionicHistory.goBack();
    }, 100);
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.splash', {
      url: '/splash',
      views: {
        'menuContent': {
          templateUrl: 'templates/splash.html',
          controller: 'SplashCtrl'
        }
      }
    })

  .state('app.myorders', {
      url: '/myorders',
      views: {
        'menuContent': {
          templateUrl: 'templates/myorders.html',
          controller: 'MyOrdersCtrl'
        }
      }
    })

  .state('app.restaurants', {
      url: '/restaurants',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurants.html',
          controller: 'RestaurantsCtrl'
        }
      }
    })

  .state('app.promotions', {
      url: '/promotions',
      views: {
        'menuContent': {
          templateUrl: 'templates/promotions.html',
          controller: 'PromotionsCtrl'
        }
      }
    })

  .state('app.restaurant-detail', {
      url: '/restaurants-detail',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurant-detail.html',
          controller: 'RestaurantDetailCtrl'
        }
      }
    })

  .state('app.order-prepare', {
      url: '/order-prepare',
      views: {
        'menuContent': {
          templateUrl: 'templates/order-prepare.html',
          controller: 'OrderPrepareCtrl'
        }
      }
    })

  .state('app.order-menu', {
      url: '/order-menu',
      views: {
        'menuContent': {
          templateUrl: 'templates/order-menu.html',
          controller: 'OrderMenuCtrl'
        }
      }
    })

  .state('app.order-confirm', {
      url: '/order-confirm',
      views: {
        'menuContent': {
          templateUrl: 'templates/order-confirm.html',
          controller: 'OrderConfirmCtrl'
        }
      }
    })

  .state('app.order-pay', {
      url: '/order-pay',
      views: {
        'menuContent': {
          templateUrl: 'templates/order-pay.html',
          controller: 'OrderPayCtrl'
        }
      }
    })

  .state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent': {
          templateUrl: 'templates/feedback.html',
          controller: 'FeedbackCtrl'
        }
      }
    })

  .state('app.promotion-detail', {
      url: '/promotion-detail',
      views: {
        'menuContent': {
          templateUrl: 'templates/promotion-detail.html',
          controller: 'PromotionDetailCtrl'
        }
      }
    })

  .state('app.promotion-pay', {
      url: '/promotion-pay',
      views: {
        'menuContent': {
          templateUrl: 'templates/promotion-pay.html',
          controller: 'PromotionPayCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/splash');
});
