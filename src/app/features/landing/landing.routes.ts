import {Routes} from "@angular/router";

export const landingRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.routes').then(routes => routes.homeRoutes)
  },
  {
    path: 'test',
    loadChildren: () => import('../test/test.routes').then(routes => routes.testRoutes)
  }
];
