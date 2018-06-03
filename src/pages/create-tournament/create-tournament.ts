import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Tournament} from "../../model/tournament";
import {TournamentProvider} from "../../providers/tournament/tournament";

@IonicPage()
@Component({
  selector: 'page-create-tournament',
  templateUrl: 'create-tournament.html',
})
export class CreateTournamentPage {

  tournament: Tournament;

  constructor(public navCtrl: NavController,
              private tournamentProvider: TournamentProvider,
  ) {
    this.tournament = new Tournament("", "");
  }

  saveTournament() {
    this.tournamentProvider.createTournament(this.tournament)
      .then(_ => {
          console.log(this.tournament);
          this.navCtrl.push('TournamentPlayerPage');
        }
      ).catch(err => console.log(err));
  }

}
