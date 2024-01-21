import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {CustomOnDestroy} from "../../classes/custom-on-destroy";
import {Router} from "@angular/router";
import {LanguageSelectionComponent} from "../language-selection/language-selection.component";
import {ClockComponent} from "../clock/clock.component";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-page-frame',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    LanguageSelectionComponent,
    ClockComponent,
    MatToolbar
  ],
  templateUrl: './page-frame.component.html',
  styleUrl: './page-frame.component.scss'
})
export class PageFrameComponent extends CustomOnDestroy implements OnInit{
  @ContentChild('headerItems') headerItems!: TemplateRef<any>;
  @ContentChild('mainContent') mainContent!: TemplateRef<any>;

  constructor(private router: Router) {
    super();
  }
  ngOnInit(): void {
  }

}
