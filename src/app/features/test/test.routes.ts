import {Routes} from "@angular/router";
import {TestAaaaComponent} from "./test-aaaa/test-aaaa.component";
import {TestBbbbComponent} from "./test-bbbb/test-bbbb.component";
import {TestCcccComponent} from "./test-cccc/test-cccc.component";

export const testRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TestAaaaComponent
  },
  {
    path: 'test-bbb',
    component: TestBbbbComponent
  },
  {
    path: 'test-ccc',
    component: TestCcccComponent
  }
];
