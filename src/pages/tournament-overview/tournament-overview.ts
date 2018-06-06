import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Tournament} from "../../model/tournament";

@IonicPage()
@Component({
  selector: 'page-tournament-overview',
  templateUrl: 'tournament-overview.html',
})


export class TournamentOverviewPage {

  private tournaments: Array<Tournament> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showTournamentFirstPage() {
    this.navCtrl.push('CreateTournamentPage');
  }

  showTournaments() {
    this.navCtrl.push('TournamentOverviewPage');
  }

}
