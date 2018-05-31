import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TournamentOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournament-overview',
  templateUrl: 'tournament-overview.html',
})


export class TournamentOverviewPage {
  private tournaments: 0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
      createTournament(){
      this.navCtrl.push('CreateTournamentPage');
      this.tournaments++;
    }

    showTournaments(){
      if (this.tournaments !== 0) {
        alert("updateOverviewPage");
      } else {
        this.navCtrl.push('TournamentOverviewPage');
      }
  }

}
