import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Tournament} from "../../model/tournament";

@IonicPage()
@Component({
  selector: 'page-create-tournament',
  templateUrl: 'create-tournament.html',
})
export class CreateTournamentPage {

  tournament: Tournament;

  constructor(public navCtrl: NavController) {
    this.tournament = new Tournament("", "");
  }

  saveTournament() {
    this.navCtrl.push('TournamentPlayerPage', {tournament: this.tournament});
  }

}
