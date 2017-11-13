


angular.module('fingertipp.services', [])

// .factory('$api', ['$http', function ($http) {

//   var host = 'http://52.74.179.74:8080/api';

//   return {
//     call: function (service, method, data) {
//       var req = {
//         method: method,
//         url: host + service,
//         data: data,
//         headers: {}
//       }
//       return $http(req);
//     }
//   }
// }])


.factory('$localStorage', ['$window', function ($window) {

  return {

    contains: function (key) {
      return $window.localStorage.hasOwnProperty(key);
    },

    remove: function (key) {
      $window.localStorage.removeItem(key);
    },

    get: function (key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },

    set: function (key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    }
  }
}])

.factory('$utils', ['$rootScope', '$state', '$ionicLoading', '$ionicHistory', '$ionicScrollDelegate', '$ionicSlideBoxDelegate', '$ionicModal', '$timeout', '$cordovaDialogs', '$cordovaDatePicker', '$window', '$sce',
  function ($rootScope, $state, $ionicLoading, $ionicHistory, $ionicScrollDelegate, $ionicSlideBoxDelegate, $ionicModal, $timeout, $cordovaDialogs, $cordovaDatePicker, $window, $sce) {

  var utils = {

    showLoading: function (msg) {
      var message = msg;
      var sIcon = ionic.Platform.isIOS()?'ios':'android'

      if (typeof msg === "undefined")
        message = "Loading...";

      $ionicLoading.show({
        template: "<ion-spinner icon='" + sIcon + "' class='spinner-stable'></ion-spinner><br/><span style='margin-top: .5em; float: right; line-height: 1em;'>&nbsp" + message + "</span>"
      });
    },

    hideLoading: function () {
      $ionicLoading.hide();
    },

    openAlert: function(msg, title, button, callback){

      if (typeof title === "undefined") title = "Alert";
      if (typeof msg === "number") msg = msg + "";
      
      if ($cordovaDialogs){
        $cordovaDialogs.alert(msg, title, button).then(callback);
      }else
        alert(msg);
    },

    openConfirm: function(msg, title, buttons, callback){

      if (typeof title === "undefined")
        title = "Confirm";

      if ($cordovaDialogs){
        $cordovaDialogs.confirm(msg, title, buttons).then(callback);
      }else
        alert(msg);
    },

    openPrompt: function(msg, title, buttons, callback){

      if (typeof title === "undefined")
        title = "Prompt";

      if ($cordovaDialogs){
        $cordovaDialogs.prompt(msg, title, buttons).then(callback);
      }else
        alert(msg);
    },

    isRootState: function (stateName) {

      if (!stateName)
        stateName = $ionicHistory.currentStateName();

      var rootStates = [
        "app",
        "app.restaurants"
      ]

      return rootStates.indexOf(stateName) >= 0;
    },

    // isBlueState: function(stateName){

    //  if (!stateName)
    //    stateName = $ionicHistory.currentStateName();

    //  if ((stateName == "app.photo") && (typeof $rootScope.curItemData.logoName === "undefined"))return false;
    //  else if ((stateName == "app.photo") && (typeof $rootScope.curItemData.logoName !== "undefined")) return true;

    //  var blueStates = [
    //    "app.drop-off",
    //    "app.drop-off-results",
    //    "app.drop-off-details",
    //    "app.drop-off-cart"
    //  ];

    //  if (blueStates.indexOf(stateName) >= 0)
    //    return true;
    //  else if ((stateName == "app.caterers-menu") && ($rootScope.cmTabIndex == 1))
    //    return true;
    //  else
    //    return false;
    // },

    clearNavHistory: function(){

      $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
        disableBack: true
      });
    },

    openDatePicker: function(ev, callback){
      var today = new Date();
      today.setHours(0);
      today.setMinutes(0);

      var options = {
        date: $rootScope.currentDT?$rootScope.currentDT:today,
        mode: 'date',
        doneButtonColor: '#11CA37',
        cancelButtonColor: "#BBBBBB",
        minDate: ionic.Platform.isIOS()?today:today.getTime(),
        x: ev.clientX,
        y: ev.clientY
      };

      if (typeof window.datePicker !== "undefined")
        $cordovaDatePicker.show(options).then(function(date){

          if ((typeof date === "undefined") || (date == "Invalid Date"))
            return;

          if ($rootScope.currentDT){
            $rootScope.currentDT.setFullYear(date.getFullYear());
            $rootScope.currentDT.setMonth(date.getMonth());
            $rootScope.currentDT.setDate(date.getDate());
          }else
            $rootScope.currentDT = date;

          if (callback) callback();
        });
    },

    openTimePicker: function(ev, callback){
      var today = new Date();
      today.setHours(0);
      today.setMinutes(0);

      var options = {
        date: $rootScope.currentDT?$rootScope.currentDT:today,
        mode: 'time',
        doneButtonColor: '#11CA37',
        cancelButtonColor: "#BBBBBB",
        minDate: ionic.Platform.isIOS()?today:today.getTime(),
        x: ev.clientX,
        y: ev.clientY
      };

      if (typeof window.datePicker !== "undefined")
        $cordovaDatePicker.show(options).then(function(time){

          if ((typeof time === "undefined") || (time == "Invalid Date"))
            return;

          if ($rootScope.currentDT){
            $rootScope.currentDT.setHours(time.getHours());
            $rootScope.currentDT.setMinutes(time.getMinutes());
          }else
            $rootScope.currentDT = time;

          if (callback) callback();
        });
    },

    // adjustSubtotal: function(){
    //   $rootScope.CART_TOTAL = 0;

    //   for (var i=0; i< $rootScope.CART.length; i++){
    //     var subtotal = $rootScope.CART[i].dCharge;

    //     for (var j=0; j < $rootScope.CART[i].items.length; j++)
    //       subtotal += parseFloat($rootScope.CART[i].items[j].price);

    //     $rootScope.CART_TOTAL += subtotal;
    //     $rootScope.CART[i].subtotal = subtotal.toFixed(2);
    //   }

    //   $rootScope.CART_TOTAL = $rootScope.CART_TOTAL.toFixed(2);
    // },

    // openCateringCart: function(){

    //   $ionicModal.fromTemplateUrl('templates/catering-cart.html', {
    //     scope: $rootScope,
    //     backdropClickToClose: false
    //   }).then(function(modal) {
    //     $rootScope.dlgCateringCart = modal;
    //     $rootScope.dlgCateringCart.show();
    //   });
    // },

    trustAsHtml: function(string) {
      return $sce.trustAsHtml(string);
    },

    getScrollByHandle: function(handle){
      var sclInstances = $ionicScrollDelegate.$getByHandle(handle)._instances;

      return sclInstances[sclInstances.length-1];
    },

    getSlideBoxByHandle: function(handle){
      var sclInstances = $ionicSlideBoxDelegate.$getByHandle(handle)._instances;

      return sclInstances[sclInstances.length-1];
    },

    removeSpaces: function(str){
      return str.replace(/\s/g, '');
    },

    padding: function(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
  };

  utils.goState = function(state, params){
    // if ((state == "app.dcp-tab") && (state == $ionicHistory.currentStateName())){
    //  $rootScope.$broadcast('onDCPTab', {tabId: $rootScope.dcpTabId});

    //  return;
    // }

    if (utils.isRootState(state)){
      $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
        disableBack: true
      });
    }

    $state.go(state, params);
  };

  utils.resizeScroll = function(handle, time_offset){
    var time = 200;

    if (time_offset) time = time_offset;
    $timeout(function(){
      if (!handle)
        $ionicScrollDelegate.resize();
      else
        utils.getScrollByHandle(handle).resize();
    }, time);
  };

  utils.getDateString = function(dt){
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                  "July","Aug", "Sept", "Oct", "Nov", "Dec"];

    var val = new Date(dt);
    var retVal = monthNames[val.getMonth()] + " " + val.getDate() + ", " + val.getFullYear();

    return retVal;
  };

  utils.getTimeString = function(dt){

    var val = new Date(dt);
    var ampm = (val.getHours() > 11)?"PM":"AM";
    var hours = (val.getHours() > 12)?(val.getHours()-12):val.getHours();

    var retVal = utils.padding(hours, 2) + ":" + utils.padding(val.getMinutes(), 2) + " " + ampm;

    return retVal;
  };

  utils.getDateTimeString = function(dt){

    if (!dt) return null;

    var val = new Date(dt);

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                  "July","Aug", "Sept", "Oct", "Nov", "Dec"];

    var ampm = (val.getHours() > 11)?"pm":"am";
    var hours = (val.getHours() > 12)?(val.getHours()-12):val.getHours();

    var retVal = monthNames[val.getMonth()] + " " + val.getDate() + ", " + hours + ":" + utils.padding(val.getMinutes(), 2) + " " + ampm;

    return retVal;
  };

  return utils;
}]);