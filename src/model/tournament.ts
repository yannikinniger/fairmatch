import {Player} from "./player";
import {Team} from "./team";
import {Game} from "./game";

export class Tournament {

  id: string;
  teams: Array<Team> = [];
  teamSize = 2;
  games: Array<Game> = [];

  constructor(
      public name: string,
      public description: string
  ) {}

  public createTeams(participants: Array<Player>) {
    if (participants.length % this.teamSize != 0 ) {
      throw new Error('uneven team size');
    }
    const sortedAfterExperience = participants.sort((a, b) => a.experience - b.experience);
    let i: number = 0;
    let j: number = sortedAfterExperience.length - 1;
    while (i <= j) {
      this.teams.push(new Team([sortedAfterExperience[i], sortedAfterExperience[j]]));
      i += 1; j -= 1;
    }
  }

  public createSchedule() {
    for (let i = 0; i < this.teams.length; ++i) {
      let opponents = this.teams.slice();
      const currentTeam = opponents.splice(i, 1)[0];
      opponents.forEach(opponent => this.games.push(new Game(currentTeam, opponent)));
    }
  }

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

}
