import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TournamentProvider} from "../../providers/tournament/tournament";
import {Tournament} from "../../model/tournament";
import {Player} from "../../model/player";
import * as PlayerModel from "../../model/player";

@IonicPage()
@Component({
  selector: 'page-tournament-player',
  templateUrl: 'tournament-player.html',
})
export class TournamentPlayerPage {

  private tournament: Tournament;
  showPlayer: boolean = true;
  playerName: string;
  positions: any;
  experiences: any;
  startTournamentButton: string;
  private Positions = PlayerModel.Positions;
  private ExperienceArray = PlayerModel.ExperienceArray;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tournamentProvider: TournamentProvider) {
    this.tournament = navParams.get('tournament');
    this.startTournamentButton = "Tournier starten";
  }

  savePlayer() {
    this.showPlayer = !this.showPlayer;
    this.tournament.participants.push(new Player(this.playerName, this.positions, this.experiences));
    console.log(this.tournament);
  }

  addPlayerFunction() {
    this.showPlayer = !this.showPlayer;
  }

  startTournament() {
    // if tournament.participants > 4
    this.tournamentProvider.createTournament(this.tournament)
      .then(_ => {
        this.navCtrl.push('TournamentPlayerPage');
      })
      .catch(err => {
        console.log(err);
      });
  }

}
