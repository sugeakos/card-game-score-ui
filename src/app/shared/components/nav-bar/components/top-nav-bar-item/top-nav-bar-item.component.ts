import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TopNavBarItem} from "../../../../../models/top-nav-bar/top-nav-bar-item";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-top-nav-bar-item[item]',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './top-nav-bar-item.component.html',
  styleUrl: './top-nav-bar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavBarItemComponent {

  @Input() item!: TopNavBarItem;
}
