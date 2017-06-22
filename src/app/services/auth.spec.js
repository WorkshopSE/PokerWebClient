import angular from 'angular';
import 'angular-mocks';
import Auth from './auth';

describe('Auth service', () => {
  beforeEach(() => {
    angular
      .module('Auth', [])
      .service('Auth', Auth);
    angular.mock.module('Auth');
  });

  it('should', angular.mock.inject(Auth => {
    expect(Auth.getData()).toEqual(3);
  }));
});
