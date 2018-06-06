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
  nextStepButton: string;

  constructor(public navCtrl: NavController) {
    this.tournament = new Tournament("", "");
    this.nextStepButton = "Nächster Schritt";
  }

  saveTournament() {
    this.navCtrl.push('TournamentPlayerPage', {tournament: this.tournament});
  }

}
