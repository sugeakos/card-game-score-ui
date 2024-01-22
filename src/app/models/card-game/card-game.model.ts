import {Moment} from "moment";

export interface CardGameModel {
  players: PlayerInfo[];
  gameId: string;
  gameStart?: Moment;
  gameEnd?: Moment;
}

export interface PlayerInfo {
  playerName: string;
  rounds?: RoundInfo[];
}

export interface RoundInfo {
  roundStart: Moment;
  roundEnd?: Moment;
  score?: number;
}
