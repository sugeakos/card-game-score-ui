import {Component, OnInit} from '@angular/core';
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {CustomOnDestroy} from "../../../shared/classes/custom-on-destroy";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {CreateGameService} from "./service/create-game.service";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {CardGameModel, PlayerInfo} from "../../../models/card-game/card-game.model";
import moment from "moment";
import {MatOption, MatSelect} from "@angular/material/select";
import * as _ from 'lodash';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {currentTime, currentTimeMoment} from "../../../shared/util/date-util";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatDivider,
    MatCardTitle,
    MatCardSubtitle,
    CollapseModule,
    MatFormField,
    MatInput,
    FormsModule,
    MatFabButton,
    MatIcon,
    MatMiniFabButton,
    MatIconButton,
    MatIconModule,
    MatSelect,
    MatOption,
    NgForOf,
    ReactiveFormsModule,
    MatCardActions,
    FontAwesomeModule,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    CreateGameService, TranslateService
  ]
})
export class HomeComponent extends CustomOnDestroy implements OnInit {

  toggleCreateNewGame: boolean = true;
  gameNames: string[] = [];
  form!: FormGroup;
  players!: PlayerInfo[];
  createGameTitle: string = this.translateService.instant('home.createNewGame');
  cancelGameCreation: string = this.translateService.instant('home.cancel');

  private readonly CARD_GAME_NAME: string = 'Mexico_';

  constructor(private createGameService: CreateGameService,
              private formBuilder: FormBuilder,
              private translateService: TranslateService) {
    super();
  }

  ngOnInit() {
    this.toggleCreateNewGame = true;
    this.initForm();
    this.listGameNames();
  }

  onClick() {
    this.toggleCreateNewGame = !this.toggleCreateNewGame;
  }

  createNewGame(): void {
    const newGame: CardGameModel = {
      gameId: this.CARD_GAME_NAME + currentTime(),
      players: [],
      gameStart: currentTimeMoment()
    };
    this.createGameService.createNewGame(newGame);
    this.listGameNames();
  }

  resetForm(): void {
    this.form.setValue({
      selectedGameName: '',
      playerName: ''
    });
  }

  addPlayerToGame(): void {
    let savedCardGame: CardGameModel = this.createGameService.getSavedCardGame(this.form.getRawValue().selectedGameName);
    const splittedNames: string[] = this.splitPlayers(this.form.getRawValue().playerName);

    splittedNames.forEach((value: string): void => {
      value = value.trim();
      const newPlayer: PlayerInfo = {
        playerName: value.trimStart().trimEnd(),
        rounds: [
          {
            roundStart: currentTimeMoment(),
            score: 51
          }
        ]
      };
      savedCardGame?.players.push(newPlayer);
    })
    this.createGameService.updateGame(savedCardGame);
    this.players = savedCardGame.players;
    this.resetForm();
  }

  listPlayersBySelectedGame(): void {
    const savedCardGame: CardGameModel = this.createGameService.getSavedCardGame(this.form.getRawValue().selectedGameName);
    this.players = savedCardGame.players;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      selectedGameName: new FormControl('', [Validators.required]),
      playerName: new FormControl('')
    });
  }

  private splitPlayers(players: string): string[] {
    let playerName = this.form.getRawValue().playerName;
    playerName = playerName.trim();
    return _.split(playerName, ',');
  }

  private listGameNames(): void {
    this.gameNames = this.createGameService.getGameIdsFormLocalStorage();
  }

  protected readonly faPlus = faPlus;
}
