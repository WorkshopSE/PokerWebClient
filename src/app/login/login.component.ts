import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="row">

      <div class="col-md-4 col-sm-4">
      </div>

      <div class="col-md-4 col-sm-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Login To Server</h3>
          </div>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <label class="sr-only" for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
              </div>
              <div class="form-group">
                <label class="sr-only" for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-default">Login</button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-4">
      </div>

    </div>`,
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
