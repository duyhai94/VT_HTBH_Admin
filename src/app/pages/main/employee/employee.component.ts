import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from 'src/app/utils/animations/fader.animation';

@Component({
  selector: 'app-employee',
  template: `
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [fader],
})
export class EmployeeComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
