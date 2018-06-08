import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Tournament} from "../../model/tournament";
import {TournamentProvider} from "../../providers/tournament/tournament";

@IonicPage()
@Component({
  selector: 'page-tournament-overview',
  templateUrl: 'tournament-overview.html',
})
export class TournamentOverviewPage {

  tournaments: Array<Tournament> = [];

  constructor(
    public navCtrl: NavController,
    tournamentProvider: TournamentProvider,
  ) {
    tournamentProvider.getTournaments()
      .then(tournaments => {
        this.tournaments = tournaments;
      });
  }

  showTournamentFirstPage() {
    this.navCtrl.push('CreateTournamentPage');
  }

  showTournaments() {
    this.navCtrl.push('TournamentOverviewPage');
  }

  showProfile() {
    this.navCtrl.push('ProfileDetailsPage');
  }

}
