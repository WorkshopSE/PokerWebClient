'use strict';

/**
 * @ngdoc function
 * @name pokerWebClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokerWebClientApp
 */
angular.module('pokerWebClientApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, $log, $cookies, auth) {

    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];


    // init controller as:
    // var main = this;

    // root scope data init:
    if ($rootScope.data === undefined) {
      $rootScope.data = {};
    }

    // root scope functions init:
    if ($rootScope.func == undefined) {
      $rootScope.func = {

        logout: function (user) {
          auth.logout(user)
            .then(function () {
              $cookies.remove('pokerUser');
              $log.info("cookie removed");
              $rootScope.user.isConnected = false;
              $location.path('/login');
            });
        }

      };
    }


    if ($rootScope.user === undefined) {

      $rootScope.user = $cookies.getObject('pokerUser');

      $log.warn("$cookie = ", $rootScope.user);

      if ($rootScope.user == null) {
        $rootScope.user = {
          isConnected: false,
          name: null,
          securityKey: null,
          players: [],
          // TODO complete...
        };
      }
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
