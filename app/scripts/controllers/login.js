'use strict';

/**
 * @ngdoc function
 * @name pokerWebClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pokerWebClientApp
 */
angular.module('pokerWebClientApp')
  .controller('LoginCtrl', function ($cookies, $rootScope, auth, $location, $log) {

    var login = this;

    // login.inputUserName
    // login.inputPassword
    // login.remember

    login.errorMessage = "";
    login.fail = false;

    if ($rootScope.user === undefined) {
      $location.path('/');
    }

    login.submit = function () {

      auth.login(login.inputUserName, login.inputPassword)
        .then(function (result) {

          if (result.Success) {

            $rootScope.user.isConnected = true;
            $rootScope.user.name = result.UserName;
            $rootScope.user.securityKey = result.SecurityKey;
            $rootScope.user.securityKey = result.SecurityKey;
            $rootScope.user.securityKey = result.SecurityKey;
            $rootScope.user.userBank = result.UserBank;
            $rootScope.user.level = result.Level;
            login.fail = false;
            $log.info($rootScope.user);

            // remember me!
            if (login.remember === true) {
              $cookies.putObject('pokerUser', $rootScope.user);
              $log.info('$cookies.putObject', $rootScope.user);
            }

            $location.path('/');

          } else {
            login.fail = true;
            login.errorMessage = result.ErrorMessage;
          }
        });


    };

  });
