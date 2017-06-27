'use strict';

/**
 * @ngdoc function
 * @name pokerWebClientApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the pokerWebClientApp
 */
angular.module('pokerWebClientApp')
  .controller('StatisticsCtrl', function ($location, $rootScope) {

    if ($rootScope.user === undefined || !$rootScope.user.isConnected) {
      $location.path('/');
    }
  });
