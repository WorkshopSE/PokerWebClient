'use strict';

describe('Controller: leaderboardCtrl', function () {

  // load the controller's module
  beforeEach(module('pokerWebClientApp'));

  var leaderboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    leaderboardCtrl = $controller('leaderboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(leaderboardCtrl.awesomeThings.length).toBe(3);
  });
});
