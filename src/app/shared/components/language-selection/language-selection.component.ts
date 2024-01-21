import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {CustomOnDestroy} from "../../classes/custom-on-destroy";
import {LangChangeEvent, TranslateModule, TranslateService} from "@ngx-translate/core";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf,
    NgForOf,
    MatButton
  ],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.scss'
})
export class LanguageSelectionComponent extends CustomOnDestroy implements OnInit {

  currentLang!: string;
  availableLanguages: string[] = [];
  allLanguages = ['en', 'hu'];
  opened = false;

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }

  constructor(private translateService: TranslateService,
              private elementRef: ElementRef) {
    super();
  }

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || 'hu';
    this.subscribeToLanguageChange();
    this.setAvailableLanguages();
  }

  subscribeToLanguageChange(): void {
    this.translateService.onLangChange.subscribe({
      next: (langChange: LangChangeEvent) => {
        this.currentLang = langChange.lang;
        this.setAvailableLanguages();
      }
    });
  }

  selectLang(lang: string): void {
    this.translateService.use(lang);
    this.opened = false;
  }

  setAvailableLanguages(): void {
    this.availableLanguages = this.allLanguages.filter(lang => lang !== this.currentLang);
  }

}
