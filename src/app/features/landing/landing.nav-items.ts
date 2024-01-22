import {TopNavBarItem} from "../../models/top-nav-bar/top-nav-bar-item";

export const navBarItems = (): TopNavBarItem[] => ([
  {
    id: 'home-nav-button',
    text: 'navMenu.home.home',
    routerLink: 'home',
    children: []
  },
  {
    id: 'player-info-nav-button',
    text: 'navMenu.playerInfo.playerInfo',
    routerLink: 'player-info',
    children: [
      {id: 'player-score', text: 'navMenu.playerInfo.playerScore', routerLink: 'player-score'},
    ]
  }

]);
