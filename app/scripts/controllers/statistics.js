'use strict';

/**
 * @ngdoc function
 * @name pokerWebClientApp.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the pokerWebClientApp
 */
angular.module('pokerWebClientApp')
  .controller('StatisticsCtrl', function ($location, $rootScope, auth, $log) {

    var statistics = this;

    if ($rootScope.user == null || !$rootScope.user.isConnected) {
      $location.path('/');
    } else {
      auth.getStatistics($rootScope.user)
        .then(function (result) {
          $log.info("statistics result:", result);
          statistics.WinRateStatistics = result.WinRateStatistics;
          statistics.GrossProfitWinRateStatistics = result.GrossProfitWinRateStatistics;
        });
    }


  });
