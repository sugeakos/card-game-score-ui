import {Routes} from "@angular/router";
import {PlayerInfoComponent} from "./player-info/player-info.component";
import {PlayerScoreComponent} from "./player-score/player-score.component";

export const playerInfoRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PlayerInfoComponent
  },
  {
    path: 'player-score',
    component: PlayerScoreComponent
  }
];
