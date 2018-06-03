import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Tournament} from "../../model/tournament";
import {TournamentProvider} from "../../providers/tournament/tournament";

/**
 * Generated class for the CreateTournamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-tournament',
  templateUrl: 'create-tournament.html',
})
export class CreateTournamentPage {

  tournament: Tournament;

  constructor(public navCtrl: NavController,
              private tournamentProvider: TournamentProvider
  ) {
    this.tournament = new Tournament("", "");
  }

  saveTournament() {
    // this.tournamentProvider.createTorunament(this.tournament)
    //   .then(_ => {
    //       console.log(this.tournament);
    //       this.navCtrl.push('TournamentPlayerPage');
    //     }
    //   ).catch(err => console.log(err));
    console.log(this.tournament);
    this.navCtrl.push('TournamentPlayerPage');
  }

}
