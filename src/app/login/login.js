class LoginController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const login = {
  template: require('./login.html'),
  controller: LoginController
};

