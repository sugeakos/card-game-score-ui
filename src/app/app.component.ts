import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomOnDestroy} from "./shared/classes/custom-on-destroy";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends CustomOnDestroy{
  title = 'card-game-ui';
}
