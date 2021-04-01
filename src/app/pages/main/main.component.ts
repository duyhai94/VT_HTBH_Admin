import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-main-layout>
      <router-outlet></router-outlet>
    </app-main-layout>
  `,
})
export class MainComponent {
  title = 'VT-HTBH-Admin';
}
