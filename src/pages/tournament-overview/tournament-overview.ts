import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
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
        const size = tournaments.length;
        while (this.tournaments.length !== size) {
          console.log(this.tournaments);
          this.tournaments.unshift(tournaments.pop());
        }
      }).catch(err => console.log(err));
  }

  showTournamentDetails(id: string) {
    const tournament = this.tournaments.find(tournament => tournament.id == id);
    this.navCtrl.push('TournamentDetailPage', {tournament: tournament});
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
