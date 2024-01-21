import {Component} from '@angular/core';
import {CustomOnDestroy} from "../../classes/custom-on-destroy";
import {TranslateService} from "@ngx-translate/core";
import moment, {Moment} from "moment";
import {takeUntil} from "rxjs";
import {TzDatePipe} from "../../util/tz-date.pipe";

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [TzDatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent extends CustomOnDestroy {

  public dateTime!: Moment;
  public lang: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) {
    super();
    setInterval(() => {
      this.dateTime = moment();
    }, 1000);

    this.translateService.onLangChange
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.dateTime = moment();
      });
  }
}
