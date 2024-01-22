import {Routes} from "@angular/router";

export const landingRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.routes').then(routes => routes.homeRoutes)
  },
  {
    path: 'player-info',
    loadChildren: () => import('../player-info/player-info.routes').then(routes => routes.playerInfoRoutes)
  }
];
