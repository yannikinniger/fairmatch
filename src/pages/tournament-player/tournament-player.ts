import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TournamentProvider} from "../../providers/tournament/tournament";
import {Tournament} from "../../model/tournament";
import {Player} from "../../model/player";

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


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tournamentProvider: TournamentProvider) {
    this.tournament = navParams.get('tournament');
    this.startTournamentButton = "Tournier starten";
  }

  savePlayer() {
    this.showPlayer = !this.showPlayer;
    this.tournament.participants.push(new Player(this.playerName, this.positions, this.experiences));
    const errorOutput = document.getElementById('message');
    this.tournamentProvider.createTournament(this.tournament)
      .then(_ => {
        errorOutput.innerText = "";
        this.navCtrl.push('TournamentPlayerPage');
      })
      .catch(err => {
        document.getElementById('message').innerText = err.message;
      });

  }

  addPlayerFunction() {
    this.showPlayer = !this.showPlayer;
  }


}
