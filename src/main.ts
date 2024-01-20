import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideAnimations} from "@angular/platform-browser/animations";
import {APP_INITIALIZER, importProvidersFrom, LOCALE_ID} from "@angular/core";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app/app.routes";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonTranslateHttpLoader} from "./app/core/translate/translate-http.loader";
import {AppInitializerService} from "./app/init/app-initializer.service";
import {registerLocaleData} from "@angular/common";

function init_app(firstLoadService: AppInitializerService): () => Promise<void> {
  return (): Promise<void> => firstLoadService.init();
}

bootstrapApplication(AppComponent, {
  providers: [
    AppInitializerService,
    provideAnimations(),
    importProvidersFrom(
      RouterModule.forRoot(appRoutes),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new CommonTranslateHttpLoader(http),
          deps: [HttpClient]
        }
      }),
      TranslateService,
      HttpClientModule,
    ),
    {provide: APP_INITIALIZER, useFactory: init_app, deps: [AppInitializerService], multi: true},
    {provide: LOCALE_ID, useValue: 'hu-HU'}
  ]
}).catch((err) => console.error(err));
