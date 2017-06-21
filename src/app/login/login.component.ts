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
            <h3 class="panel-title">Login To Server - Texas Hold'em Poker Web Client</h3>
          </div>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <label class="sr-only" for="username">User Name</label>
                <input type="email" class="form-control" id="username" placeholder="User Name">
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
              
              <!-- TODO: change this stub -->
              <a href="/dashboard">
                dashboard
              </a>
              
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-4">
      </div>

    </div>
  `,
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
