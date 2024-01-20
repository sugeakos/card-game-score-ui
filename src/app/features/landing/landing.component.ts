import {Component, OnInit} from '@angular/core';
import {CustomOnDestroy} from "../../shared/classes/custom-on-destroy";
import {RouterOutlet} from "@angular/router";
import {map, Observable} from "rxjs";
import {TopNavBarItem} from "../../models/top-nav-bar/top-nav-bar-item";
import {navBarItems} from "./landing.nav-items";
import {PageFrameComponent} from "../../shared/components/page-frame/page-frame.component";
import {TopNavBarComponent} from "../../shared/components/nav-bar/components/top-nav-bar/top-nav-bar.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {LanguageSelectionComponent} from "../../shared/components/language-selection/language-selection.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, PageFrameComponent, TopNavBarComponent, NgIf, AsyncPipe, NgForOf, LanguageSelectionComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent extends CustomOnDestroy implements OnInit{
  navBarItems!: TopNavBarItem[];

  constructor() {
    super();
  }


  ngOnInit(): void {
    this.navBarItems = navBarItems();
  }


}
