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
    $rootScope.data = {};

    $rootScope.user = {
      isConnected: false,
      name: null,
      key: null,
      players: [],
      // TODO complete...
    };


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
      $log.debug("user:", $rootScope.user)
    });

    /* log functions: */
    /*
    $log.info("info");
    $log.debug("debug");
    $log.warn("warn");
    $log.error("error");
    */

  });
