import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {PokerNavbarComponent} from './poker-navbar/poker-navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {BsDropdownModule} from "ngx-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    LoginComponent,
    SignUpComponent,
    LeaderboardComponent,
    StatisticsComponent,
    PokerNavbarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
