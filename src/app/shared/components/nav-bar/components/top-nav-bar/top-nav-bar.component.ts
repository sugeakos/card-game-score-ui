import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TopNavBarItem} from "../../../../../models/top-nav-bar/top-nav-bar-item";
import {NgForOf, NgIf} from "@angular/common";
import {TopNavBarItemComponent} from "../top-nav-bar-item/top-nav-bar-item.component";
import {TopNavBarDropDownComponent} from "../top-nav-bar-drop-down/top-nav-bar-drop-down.component";

@Component({
  selector: 'app-top-nav-bar[items]',
  standalone: true,
  imports: [
    NgForOf,
    TopNavBarItemComponent,
    NgIf,
    TopNavBarDropDownComponent
  ],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavBarComponent {

  @Input() items: TopNavBarItem[] = [];
  navbarCollapsed = true;

  toggleNavbarCollapsing(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  trackByItem(index: number, item: TopNavBarItem): string {
    return item.routerLink || `${index}`;
  }
}
