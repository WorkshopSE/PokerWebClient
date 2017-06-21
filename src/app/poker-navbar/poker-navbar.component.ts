import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-poker-navbar',
  template: `
  <nav class="navbar navbar-inverse">

      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNavbar"
                  aria-expanded="false" (click)="toggleState()">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a class="navbar-brand">Texas Hold'em Poker</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <!--[ngClass]="{ 'in' : isIn }"-->
        <div class="collapse navbar-collapse" id="mainNavbar" >

          <ul class="nav navbar-nav">
            <li ng-class="active"><a routerLink="/statistics">Statistics</a></li>
            <li ng-class=""><a routerLink="/leaderboard">Leaderboard</a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <div dropdown>
              <button dropdownToggle type="button" class="btn btn-primary dropdown-toggle">
                Button dropdown <span class="caret"></span>
              </button>
              <ul *dropdownMenu class="dropdown-menu" role="menu">
                <li role="menuitem"><a class="dropdown-item" href="#">More Details</a></li>
                <li class="divider dropdown-divider"></li>
                <li role="menuitem"><a class="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </ul>

        </div><!-- /.navbar-collapse -->

      </div><!-- /.container-fluid -->

    </nav>
`,
  templateUrl: 'poker-navbar.component.html',
})
export class PokerNavbarComponent implements OnInit {

  public isIn: boolean;

  constructor() {
  }

  public toggleState(): void {
    this.isIn = !this.isIn;
  }

  ngOnInit() {
    this.isIn = false;
  }

}


