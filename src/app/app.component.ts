import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="h1 label-info">
      <h1>
        Welcome to Texas Holdem Poker
      </h1>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
