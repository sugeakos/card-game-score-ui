import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {CustomOnDestroy} from "../../../shared/classes/custom-on-destroy";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {CreateGameService} from "../../home/home/service/create-game.service";
import {CardGameModel, PlayerInfo, RoundInfo} from "../../../models/card-game/card-game.model";
import {MatCard, MatCardContent} from "@angular/material/card";
import * as _ from 'lodash';
import moment from "moment";
import {MatIcon} from "@angular/material/icon";
import {currentTimeMoment} from "../../../shared/util/date-util";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-player-score',
  standalone: true,
  imports: [
    MatButton,
    MatStepper,
    MatStepLabel,
    MatFormField,
    MatStep,
    MatInput,
    MatStepperNext,
    FormsModule,
    MatOption,
    MatSelect,
    NgForOf,
    ReactiveFormsModule,
    MatCardContent,
    MatCard,
    NgIf,
    MatIcon,
    MatStepperPrevious,
    TranslateModule,
  ],
  templateUrl: './player-score.component.html',
  styleUrl: './player-score.component.scss',
  providers: [
    CreateGameService
  ]
})
export class PlayerScoreComponent extends CustomOnDestroy implements OnInit{

  form!: FormGroup;
  gameNames!: string[]
  players!: PlayerInfo[]
  selectedGame!: CardGameModel;
  playersForm!: FormGroup;
  constructor(private cardGameService: CreateGameService,
              private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.listGameNames();
  }

  listPlayersBySelectedGame(): void {
    this.selectedGame = this.cardGameService.getSavedCardGame(this.form.getRawValue().selectedGameName);
    this.players = this.selectedGame.players;
    this.initPlayersForm();
  }

  savePointToPlayer(selectedPlayerName: string): void {
    const selectedPlayer = this.selectedGame.players.find(playerInfo => playerInfo.playerName === selectedPlayerName);
    const lastRoundScore = this.getLastRound(selectedPlayer?.rounds)?.score ?? 51;
    const newRoundScore = this.getNewRoundScore(lastRoundScore, selectedPlayerName);
    const latestRound: RoundInfo = {
      roundStart: currentTimeMoment(),
      score: newRoundScore
    };
    selectedPlayer?.rounds?.push(latestRound);
    this.cardGameService.updateGame(this.selectedGame);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      selectedGameName: new FormControl('')
    });
  }

  private listGameNames(): void {
    this.gameNames = this.cardGameService.getGameIdsFormLocalStorage();
  }

  private initPlayersForm(): void {
    this.playersForm = this.formBuilder.group({
      selectedOperation: new FormControl('-')
    });
    this.players.forEach(player => {
      this.playersForm.addControl(player.playerName + 'Control', new FormControl(0))
    });
  }

  private getLastRound(rounds: RoundInfo[] | undefined): RoundInfo | undefined {
    return _.last(rounds);
  }

  private getNewRoundScore(lastRoundScore: number, selectedPlayerName: string): number {
    return this.playersForm.getRawValue().selectedOperation === '-' ?
      lastRoundScore - this.playersForm.get(selectedPlayerName + 'Control')?.value as number :
      lastRoundScore + this.playersForm.get(selectedPlayerName + 'Control')?.value as number;
  }
}
