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

    // var baseURL = 'http://localhost:9000/api'; // dev
    // var baseURL = 'http://pokerbe.azurewebsites.net/api'; // prod
    var baseURL = GetServiceBaseURL(); // dynamic


    function GetServiceBaseURL() {
      var _ServiceBaseURL = "/api";

      if (document.domain.indexOf("localhost") !== -1) {
        _ServiceBaseURL = "http://localhost" + _ServiceBaseURL;
      }

      return _ServiceBaseURL;
    }

    /**
     * @desc
     *      for sending an http call (POST) to the server
     * @author
     *      Idan Izicovich
     * @since
     *      ver 1.0.0
     * @private
     * @param {string} controller 
     * @param {string} action 
     * @param {object} request 
     */
    function httpCall(controller, action, request) {
      return $http({
          method: 'POST',
          url: baseURL + controller + action,
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
    }

    /**
     * Authentication Service Methods
     */
    return {

      // test: function (username, password) {
      //   return $q(function (success) {
      //     success('ok');
      //   });
      // },

      login: function (username, password) {

        var request = {
          UserName: username,
          Password: password
        };

        return httpCall('/authentication', '/login', request);
      },

      logout: function (user) {
        return httpCall(
          '/authentication',
          '/logout', {
            UserName: user.name,
            SecurityKey: user.securityKey
          }
        );

      },

      // signIn: function (username, password, deposit) {
      //   // TODO
      // },

      getUsers: function (user) {
        return httpCall(
          '/history',
          '/GetAllUsers', {
            UserName: user.name,
            SecurityKey: user.securityKey
          }
        );
      },

      getStatistics: function (user) {
        return httpCall(
          '/history',
          '/GetStatistics', {
            UserName: user.name,
            SecurityKey: user.securityKey
          }
        );
      }

    };



  });
