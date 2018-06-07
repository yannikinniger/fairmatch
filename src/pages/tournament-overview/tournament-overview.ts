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

  private tournaments: Array<Tournament> = [];


  constructor(
    public navCtrl: NavController,
    private tournamentProvider: TournamentProvider,
  ) {
    this.tournaments = tournamentProvider.getTournaments();
  }

  showTournamentFirstPage() {
    this.navCtrl.push('CreateTournamentPage');
  }

  showTournaments() {
    this.navCtrl.push('TournamentOverviewPage');
  }

}
