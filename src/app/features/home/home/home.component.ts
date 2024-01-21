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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    CreateGameService
  ]
})
export class HomeComponent extends CustomOnDestroy implements OnInit {

  toggleCreateNewGame: boolean = false;
  gameNames: string[] = [];
  form!: FormGroup;
  constructor(private createGameService: CreateGameService,
              private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.gameNames = this.createGameService.getGameIdsFormLocalStorage();
  }

  onClick() {
    this.toggleCreateNewGame = !this.toggleCreateNewGame;
  }

  createNewGame(): void {
    const newGame: CardGameModel = {
      players: [],
      gameStart: moment()
    };
    this.createGameService.createNewGame(newGame);
  }

  resetForm(): void {
    this.form.setValue({
      selectedGameName: '',
      playerName: ''
    });
  }

  addPlayerToGame(): void {
    const newPlayer: PlayerInfo = {
      playerName: this.form.getRawValue().playerName
    };
    let savedCardGame: CardGameModel = this.createGameService.getSavedCardGame(this.form.getRawValue().selectedGameName);
    savedCardGame?.players.push(newPlayer);
    console.log('SavedCardGame: ', savedCardGame);
    this.createGameService.createNewGame(savedCardGame);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      selectedGameName: new FormControl('', [Validators.required]),
      playerName: new FormControl('')
    });
  }
}
