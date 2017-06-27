'use strict';

/**
 * @ngdoc function
 * @name pokerWebClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokerWebClientApp
 */
angular.module('pokerWebClientApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, $log) {

    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];


    // init controller as:
    var main = this;

    // root scope data init:
    if ($rootScope.data === undefined) {
      $rootScope.data = {};
    }

    if ($rootScope.user === undefined) {
      $rootScope.user = {
        isConnected: false,
        name: null,
        securityKey: null,
        players: [],
        // TODO complete...
      };
    }


    $rootScope.menu = [{
        label: 'Login',
        route: '#/login'
      },
      {
        label: 'Statistics',
        route: '#/statistics'
      },
      {
        label: 'Leaderboard',
        route: '#/leaderboard'
      },
    ];

    $rootScope.menuActive = '/';

    $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
      $rootScope.menuActive = $location.path();
      $log.debug("user:", $rootScope.user);
      $log.debug('e:', e);
      $log.debug('curr:', curr);
      $log.debug('prev:', prev);
    });

    /* log functions: */
    /*
    $log.info("info");
    $log.debug("debug");
    $log.warn("warn");
    $log.error("error");
    */

  });
