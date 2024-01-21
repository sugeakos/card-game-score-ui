import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component').then((x) => x.LandingComponent),
    loadChildren: () => import('./features/landing/landing.routes').then(routes => routes.landingRoutes),
    data: {}
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
