import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Tournament} from "../../model/tournament";

/**
 * Generated class for the TournamentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournament-detail',
  templateUrl: 'tournament-detail.html',
})
export class TournamentDetailPage {

  tournament: Tournament;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament = navParams.get('tournament');
    if (this.tournament === undefined) {
      navCtrl.push('TournamentOverviewPage')
    }
  }


}
