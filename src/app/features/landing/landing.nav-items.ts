import {TopNavBarItem} from "../../models/top-nav-bar/top-nav-bar-item";

export const navBarItems = (): TopNavBarItem[] => ([
  {
    id: 'home-nav-button',
    text: 'navMenu.home.home',
    routerLink: 'home',
    children: [
      {id: 'home-2', text: 'home-2', routerLink: 'home-2'},

    ]
  },
  {
    id: 'test-nav-button',
    text: 'navMenu.test.test',
    routerLink: 'test',
    children: [
      {id: 'test-bbb', text: 'test-bbb', routerLink: 'test-bbb'},
      {id: 'test-ccc', text: 'test-ccc', routerLink: 'test-ccc'},
    ]
  }

]);
