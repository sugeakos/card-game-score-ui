import momentTz from 'moment-timezone';
import {Moment} from "moment";

export function currentTime(): string {
  return momentTz().tz("Europe/Budapest").format('yyyy-MM-DD_HH:mm:ss');
}

export function currentTimeMoment(): Moment {
  console.log('Moment', momentTz().tz("Europe/Budapest", true).format('yyyy-MM-dd_HH:mm:ss'));
  return momentTz().tz("Europe/Budapest");
}
