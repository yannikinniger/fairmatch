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
    let teamsCopy = this.teams;
    function getRandomTeam(): Team {
      const randomIndex = Tournament.getRandomArbitrary(0, teamsCopy.length);
      return teamsCopy.splice(randomIndex, 1)[0];
    }
    while (teamsCopy.length > 0) {
      console.log('game');
      this.games.push(new Game(getRandomTeam(), getRandomTeam()))
    }
  }

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

}
