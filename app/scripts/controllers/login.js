'use strict';

/**
 * @ngdoc function
 * @name pokerWebClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pokerWebClientApp
 */
angular.module('pokerWebClientApp')
  .controller('LoginCtrl', function ($cookies, $rootScope, auth, $location) {

    var login = this;

    // login.inputUserName
    // login.inputPassword
    // login.remember

    login.errorMessage = "";

    login.submit = function () {

      auth.login(login.inputUserName, login.inputPassword)
        .then(function (result) {
          if (result) {
            $location.path = '/';
          }
          else{
            login.errorMessage = 'wrong username / password - please try again';
          }
        });

      if (login.remember === true) {
        $cookies.putObject('pokerUser', $rootScope.user);
      }
    }

  });
