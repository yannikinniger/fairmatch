import {Player} from "./player";
import {Team} from "./team";

export class Tournament {

  id: string;
  participants: Array<Player> = [];
  teams: Array<Team> = [];
  teamSize = 2;

  constructor(
      public name: string,
      public description: string
  ) {}

  public createTeams() {
    if (this.participants.length % this.teamSize != 0 ) {
      throw new Error('uneven team size');
    }
    const sortedAfterExperience = this.participants.sort((a, b) => a.experience - b.experience);
    let i: number = 0;
    let j: number = sortedAfterExperience.length - 1;
    while (i <= j) {
      this.teams.push(new Team([sortedAfterExperience[i], sortedAfterExperience[j]]));
      i += 1; j -= 1;
    }
  }

}
