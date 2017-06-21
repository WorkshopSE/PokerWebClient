import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container center-block">
      <app-poker-navbar></app-poker-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
