import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TournamentProvider} from "../../providers/tournament/tournament";
import {Player} from "../../model/player";
import {Tournament} from "../../model/tournament";
import PlayerModel from '../../model/player';

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
    tournamentProvider.createTournament(this.tournament).then(_ => console.log('created'));
  }

}
