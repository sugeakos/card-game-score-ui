import {CustomOnDestroy} from "../shared/classes/custom-on-destroy";
import {Injectable} from "@angular/core";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {defineLocale, enGbLocale, huLocale} from "ngx-bootstrap/chronos";
import {takeUntil} from "rxjs";

@Injectable()
export class AppInitializerService extends CustomOnDestroy {

  constructor(private translateService: TranslateService,
              private readonly router: Router) {
    super();
  }

  init(): Promise<void> {
    this.initTranslate();
    this.subscribeToRouter();
    return Promise.resolve();
  }

  initTranslate(): void {
    defineLocale('hu', huLocale);
    defineLocale('en', enGbLocale);
    this.translateService.use('en');
    this.translateService.onLangChange
      .pipe(takeUntil(this.destroy))
      .subscribe((langEvent: LangChangeEvent) => {
        localStorage.setItem('language', langEvent.lang);
      });
  }

  subscribeToRouter(): void {
    this.router.events
      .pipe(takeUntil(this.destroy))
      .subscribe((event) => {

      });
  }
}
