import {Pipe, PipeTransform} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {DEFAULT_DATE_FORMAT} from "./date-format.constants";
import moment, {Moment} from "moment";

@Pipe({
  standalone: true,
  name: 'tzPipe'
})
export class TzDatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {
  }

  transform(value: Date | string | number | null | Moment): any {
    const dateFormat = this.translateService.currentLang == 'en' ? DEFAULT_DATE_FORMAT.EN.MOMENT_PIPE
      : DEFAULT_DATE_FORMAT.HU.MOMENT_PIPE;
    return moment(value).format(dateFormat);
  }
}
