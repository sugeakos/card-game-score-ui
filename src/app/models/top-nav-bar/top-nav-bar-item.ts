export interface TopNavBarItem {
  id: string;
  text: string;
  routerLink?: string;
  hide?: boolean;
  children?: TopNavBarItem[];
}
