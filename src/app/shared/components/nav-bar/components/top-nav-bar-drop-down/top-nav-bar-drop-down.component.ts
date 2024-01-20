import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TopNavBarItem} from "../../../../../models/top-nav-bar/top-nav-bar-item";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-top-nav-bar-drop-down',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    TranslateModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './top-nav-bar-drop-down.component.html',
  styleUrl: './top-nav-bar-drop-down.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavBarDropDownComponent {
  @Input() item!: TopNavBarItem;

  trackByItem(index: number, item: TopNavBarItem): string {
    return item.routerLink || `${index}`;
  }
}
