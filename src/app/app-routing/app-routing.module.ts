import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {LeaderboardComponent} from "../leaderboard/leaderboard.component";
import {StatisticsComponent} from "../statistics/statistics.component";

// const routes: Routes = [
//   {path: '', redirectTo: '/login', pathMatch: 'full'},
//   {path: 'login', component: LoginComponent},
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     children: [
//       {path: 'leaderboard', component: LeaderboardComponent},
//       {path: 'statistics', component: StatisticsComponent}
//     ]
//   }
// ];

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
