'use strict';

/**
 * @ngdoc function
 * @name pokerWebClientApp.controller:leaderboardCtrl
 * @description
 * # leaderboardCtrl
 * Controller of the pokerWebClientApp
 */
angular.module('pokerWebClientApp')
  .controller('LeaderboardCtrl', function ($log, $rootScope, $location, $scope, auth) {

    var leaderboard = this;

    if ($rootScope.user === undefined || !$rootScope.user.isConnected) {
      $location.path('/');
    }

    if ($rootScope.user != null) {
      auth.getUsers($rootScope.user).then(function (response) {
        if (response.Users != null || response.Users.length > 0) {
          leaderboard.users = response.Users;
          leaderboard.columns = [
            'User Name',
            'Level',
            'Avatar',
            'GrossProfits',
            'GrossLosses',
            'CashGain',
            'GamesPlayed'
          ]
        }
        $log.info("users: ", response.Users);
      });
    }

    // Stub
    // [
    //   {
    //     '#' : 1,
    //     'name': 'test name',
    //     'property': 'value2'
    //   },
    //   {
    //     '#' : 2,
    //     'name': 'test name2',
    //     'property': 'value2'
    //   },
    //   {
    //     '#' : 3,
    //     'name': 'test name3',
    //     'property': 'value3'
    //   }
    // ];

  });
