import {Component, OnInit} from '@angular/core';
import {CustomOnDestroy} from "../../../shared/classes/custom-on-destroy";
import {CreateGameService} from "../../home/home/service/create-game.service";
import {CardGameModel, PlayerInfo} from "../../../models/card-game/card-game.model";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFabButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-player-info',
  standalone: true,
  imports: [
    FaIconComponent,
    FormsModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFabButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatOption,
    MatSelect,
    NgForOf,
    ReactiveFormsModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatHeaderRowDef,
    NgClass,
    NgIf,
    TranslateModule
  ],
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.scss',
  providers: [
    CreateGameService
  ]
})
export class PlayerInfoComponent extends CustomOnDestroy implements OnInit{

  players: PlayerInfo[] = [];
  gameNames: string[] = [];
  form!: FormGroup;
  currentDealer!: string;
  nextDealer!: string;
  selectedGame!: CardGameModel;
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

    const length = this.players[0]?.rounds?.length ?? 0;
    if (length % 2 == 0) {
      this.currentDealer = this.players[1].playerName;
      this.nextDealer = this.players[2].playerName;
    } else if (length % 3 == 0) {
      this.currentDealer = this.players[2].playerName;
      this.nextDealer = this.players[3].playerName;
    } else {
      this.currentDealer = this.players[0].playerName;
      this.nextDealer = this.players[1].playerName;
    }
  }

  resetForm(): void {
    this.form.setValue({
      selectedGameName: ''
    });
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      selectedGameName: new FormControl('')
    });
  }

  private listGameNames(): void {
    this.gameNames = this.cardGameService.getGameIdsFormLocalStorage();
  }
}
