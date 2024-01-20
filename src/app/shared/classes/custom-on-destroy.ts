import {Directive, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Directive()
export class CustomOnDestroy implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  get destroy() {
    return this.destroy$;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
