'use strict';

/**
 * @ngdoc service
 * @name pokerWebClientApp.auth
 * @description
 * # auth
 * Service in the pokerWebClientApp.
 */
angular.module('pokerWebClientApp')
  .service('auth', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      login: function(username, password){
        return $q(function(success, fail){
          success('ok');
        });
      }
    }

  });
