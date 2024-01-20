import {TranslateLoader} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";

export class CommonTranslateHttpLoader implements TranslateLoader {

  constructor(private httpClient: HttpClient) {
  }

  getTranslation(lang: string): Observable<Record<string, string>> {
    const requests: any = [];

    this.getFolderNames().forEach((folderName: string) => {
      requests.push(this.httpClient.get(`assets/i18n/${folderName}/${lang}.json`));
    });

    return forkJoin(requests)
      .pipe(
        map((results: any) => {
          let translations = {};
          results.forEach((result: any) => {
            translations = Object.assign(translations, result);
          });
          return translations;
        })
      );
  }

  protected getFolderNames(): string [] {
    return [

    ];
  }
}
