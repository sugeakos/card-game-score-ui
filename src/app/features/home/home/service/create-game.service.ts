import { Injectable } from '@angular/core';
import {CustomOnDestroy} from "../../../../shared/classes/custom-on-destroy";
import {CardGameModel} from "../../../../models/card-game/card-game.model";
import moment from "moment";

@Injectable()
export class CreateGameService extends CustomOnDestroy {
  private newGame!: CardGameModel;
  private readonly CARD_GAME_NAME: string = 'Mexico_';
  constructor() {
    super();
  }

  createNewGame(gameModel: CardGameModel): void {
    this.newGame = gameModel;
    this.newGame.gameId = this.CARD_GAME_NAME + moment().toISOString();
    this.saveGameIdsToLocalStorage(this.newGame.gameId);
    this.saveGameToLocalStorage(this.newGame.gameId, this.newGame);
  }

  getSavedCardGame(gameName: string): CardGameModel {
    let cardGameFormLocalStorage: string = localStorage.getItem(gameName) ?? '';
    return JSON.parse(cardGameFormLocalStorage);
  }

  getGameIdsFormLocalStorage(): string[] {
    let gameNamesFromLocalStorage: string | null = localStorage.getItem('gameNames');
    if (gameNamesFromLocalStorage !== null) {
      console.log('GameName: ', gameNamesFromLocalStorage.split(','));
      return  gameNamesFromLocalStorage.split(',');
    } else {
      return  [];
    }
  }

  private saveGameToLocalStorage(gameName: string, gameModel: CardGameModel): void {
    localStorage.setItem(gameName, JSON.stringify(gameModel));
  }

  private saveGameIdsToLocalStorage(gameName: string): void {
    let gameNamesFromLocalStorage = localStorage.getItem('gameNames');
    let gameNameToSave;

    if (gameNamesFromLocalStorage === null) {
      gameNameToSave = gameName;
    } else  {
      gameNameToSave = gameNamesFromLocalStorage + ',' + gameName;
    }
    localStorage.setItem('gameNames', gameNameToSave);
  }
}
