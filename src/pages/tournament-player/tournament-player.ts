import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TournamentProvider} from "../../providers/tournament/tournament";
import {Tournament} from "../../model/tournament";

@IonicPage()
@Component({
  selector: 'page-tournament-player',
  templateUrl: 'tournament-player.html',
})
export class TournamentPlayerPage {

  private tournament: Tournament;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tournamentProvider: TournamentProvider
  ) {
    this.tournament = navParams.get('tournament');
  }

}
