import { Injectable } from '@angular/core';
import {CustomOnDestroy} from "../../../../shared/classes/custom-on-destroy";
import {CardGameModel} from "../../../../models/card-game/card-game.model";
import moment from "moment";

@Injectable()
export class CreateGameService extends CustomOnDestroy {
  private newGame!: CardGameModel;

  private readonly DEFAULT_CARD_GAME: CardGameModel = {
    gameId: 'DefaultGameId',
    gameStart: moment(),
    players: []
  };
  constructor() {
    super();
  }

  createNewGame(gameModel: CardGameModel): void {
    this.newGame = gameModel;;
    this.saveGameIdsToLocalStorage(this.newGame.gameId);
    this.saveGameToLocalStorage(this.newGame.gameId, this.newGame);
  }

  getSavedCardGame(gameName: string): CardGameModel {
    let cardGameFormLocalStorage: string = localStorage.getItem(gameName) ?? JSON.stringify(this.DEFAULT_CARD_GAME);
    return JSON.parse(cardGameFormLocalStorage);
  }

  getGameIdsFormLocalStorage(): string[] {
    let gameNamesFromLocalStorage: string | null = localStorage.getItem('gameNames');
    if (gameNamesFromLocalStorage !== null) {
      return  gameNamesFromLocalStorage.split(',');
    } else {
      return  [];
    }
  }

  updateGame(updatedGameModel: CardGameModel): void {
    this.saveGameToLocalStorage(updatedGameModel.gameId, updatedGameModel);
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

  private removeGameFormLocalStorageByName(gameName: string): void {
    localStorage.removeItem(gameName);
  }
}
