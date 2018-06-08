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
    private tournamentProvider: TournamentProvider,
  ) {}

  ionViewDidEnter() {
    this.tournamentProvider.getTournaments()
      .then(tournaments => {
        this.tournaments = tournaments;
      });
  }

  showTournamentDetails(id: string) {
    const tournament = this.tournaments.find(tournament => tournament.id == id);
    this.navCtrl.push('TournamentDetailPage', {tournament: tournament});
    console.log(tournament);
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
