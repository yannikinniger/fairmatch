import {Player} from "./player";

export class Tournament {

  id: string;
  participants: Array<Player> = [];

  constructor(
      public name: string,
      public description: string
  ) {}

}
