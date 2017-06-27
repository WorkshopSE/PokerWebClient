'use strict';

/**
 * @ngdoc service
 * @name pokerWebClientApp.auth
 * @description
 * # auth
 * Service in the pokerWebClientApp.
 */
angular.module('pokerWebClientApp')
  .service('auth', function ($q, $http, $log) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /**
     * Server URL
     * - will change on deployment
     */
    var baseURL = 'http://localhost:9000/api';
    var controller = '/authentication';

    /**
     * Authentication Service Methods
     */
    return {

      test: function (username, password) {
        return $q(function (success) {
          success('ok');
        });
      },

      login: function (username, password) {

        var request = {
          username,
          password
        };

        return $http({
            method: 'POST',
            url: baseURL + controller + '/login',
            headers: {
              'Content-Type': 'application/json'
            },
            data: angular.toJson(request)
          })
          .then(function (response) {
            $log.info(response);
            return response.data;
          })
          .catch(function (response) {
            $log.error("http fail! response: ", response);
            return {
              Success: false,
              ErrorMessage: 'connection to server fail, please check your internet connection!'
            };
          });
      },

      logout: function (user) {
        // TODO
      },

      signIn: function (username, password, deposit) {
        // TODO
      }
    };

  });
