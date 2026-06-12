import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main class="site-main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .site-main {
      min-height: calc(100vh - 200px);
      overflow-x: hidden;
    }
  `]
})
export class AppComponent {
  title = 'Dr. Ruth Njoroge Medical Spa';
}
